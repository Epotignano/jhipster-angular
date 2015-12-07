/**
 * Created by mmasuyama on 10/24/2015.
 */

module app.services {

  export interface IFirebaseCRUD {
    getCollection(collectionKey:string) : ng.IPromise<AngularFireArray>;
    get(objectId: string,collectionKey : string);
    create(objectData, collectionKey);
    update(updateData, updateId, collectionKey);
    remove(removeId, collectionKey);
  }

  export class FirebaseCRUD implements IFirebaseCRUD {

    /** @ngInject */
    constructor(private $q : ng.IQService ,
                private $firebaseArray : AngularFireArrayService,
                private dbFactory : Firebase) {
    }

    private _storeArrays = function(id, elementsArray, collection, key){
      var arrayPromise = this.$q.defer();
      var _promises = [];
      var _updates = [];
      var _additions = [];

      var _keyRef = this.$firebaseArray(this.dbFactory.child(collection).child(id).child(key))
        .$loaded((data) => {

          data.forEach((dataElement, dataIndex) => {
              elementsArray.some((element, elementIndex) => {
                  if (dataElement['$id'] == element['$id']) {
                      var elementUpdatePromise = this.$q.defer();
                      _updates.push(elementUpdatePromise.promise);
                      data[dataIndex] = element;
                      data.$save(dataIndex).then((result) => {
                          console.log(elementIndex);
                          delete elementsArray[elementIndex];
                          elementUpdatePromise.resolve(result.key());
                      });


                  }
              });

          });

          //finished the updated, proceed to add data to the array;
          if(_updates.length){
            // if updates has to be executed, so, wait for them and after, add the remaining elements
              this.$q.all(_updates)
                  .then((results) => {
                      elementsArray = _.compact(elementsArray);
                      elementsArray.forEach((element) => {
                          var _elementAddition = this.$q.defer();
                          _additions.push(_elementAddition.promise);
                          data.$add(element).then((result) => {
                              _elementAddition.resolve(result);
                          });
                      });

                      this.$q.all(_additions).then((results) => {
                          arrayPromise.resolve(results);
                      });
                  });
          } else {
            elementsArray.forEach((element, index) => {
              var _elementAddition = this.$q.defer();
              _additions.push(_elementAddition.promise);
              data.$add(element).then((result) => {
                  _elementAddition.resolve(result);
              });
            });

            this.$q.all(_additions).then((results) => {
              arrayPromise.resolve(results);
            });
          }


        });



      return arrayPromise.promise;

    };

    getCollection(collectionKey): ng.IPromise<AngularFireArray> {
      return this.$firebaseArray(this.dbFactory.child(collectionKey)).$loaded();
    }

    get(objectId: string, collectionKey:string) :any {
      var Promise = this.$q.defer();
      this.dbFactory.child(collectionKey).child(objectId)
        .on('value', (snapshot) => {
          var _value = snapshot.val();
          var _keys = Object.keys(_value);
          var _promises = [];

          _keys.forEach((key) => {
            if(typeof _value[key] === 'object') {
              var _keyPromise = this.$q.defer();
              this.$firebaseArray(this.dbFactory.child(collectionKey).child(objectId).child(key))
                .$loaded((data) => {
                  _value[key] = data;
                  _keyPromise.resolve();
                });
              _promises.push(_keyPromise.promise);
            }
          });
          if(_promises.length){
              this.$q.all(_promises)
                  .then((result) => {
                      Promise.resolve(_value);
                  });
          } else {
            Promise.resolve(_value);
          }

        });
      return Promise.promise;
    }

    create(objectToSave, collectionKey) {
      var creationPromise = this.$q.defer();

      var _keys = Object.keys(objectToSave);
      var _internalArrays = {};

      _keys.forEach((key) => {
        if(Array.isArray(objectToSave[key])) {
          _internalArrays[key] = objectToSave[key];
          delete objectToSave[key];
        }
      });

      this.$firebaseArray(this.dbFactory.child(collectionKey)).$add(objectToSave).then(
        (result)=> {
          
          if(Object.keys(_internalArrays).length) {
            var _promises = [];
            var _keys = Object.keys(_internalArrays);
            _keys.forEach((key) => {
              var _keyPromise = this.$q.defer();
              _promises.push(_keyPromise.promise);
              this._storeArrays(result.key(), _internalArrays[key], collectionKey, key).then(((result) => {
                  _keyPromise.resolve();
              }));
            });

            this.$q.all(_promises).then((results) => {
                creationPromise.resolve(results);
            });
          } else {
              // send if of the added element;
              creationPromise.resolve(result.key());
          }

      });

      return creationPromise.promise;
    }

    update(updateData, updateId, collectionKey) {
      var _keys = Object.keys(updateData);
      var updatePromise = this.$q.defer();
      var _internalArrays = {};

      _keys.forEach((key) => {
        if(Array.isArray(updateData[key])) {
          _internalArrays[key] = updateData[key];
          delete updateData[key];
        }
      });

      this.dbFactory.child(collectionKey).child(updateId).update(updateData, (result) => {

        if(!!_internalArrays) {
          var _promises = [];
          var _keys = Object.keys(_internalArrays);
          _keys.forEach((key) => {
            var _keyPromise = this.$q.defer();
            _promises.push(_keyPromise.promise);
            this._storeArrays(updateId, _internalArrays[key], collectionKey, key).then(((result) => {
                _keyPromise.resolve();
            }));
          });

          this.$q.all(_promises).then((results) => {
              updatePromise.resolve(results);
          });
        } else {
            updatePromise.resolve();
        }
      });

      return updatePromise.promise;
    }

    remove(removeId, collectionKey) {
      var Promise = this.$q.defer();
      this.dbFactory.child(collectionKey).child(removeId).remove(function(result){
        Promise.resolve(result);
      });
      return Promise.promise;

    }
  }

  FirebaseCRUDFactory.$inject = ['$q', '$firebaseArray', 'dbFactory'];

  export function FirebaseCRUDFactory(
    $q : ng.IQService,
    $firebaseArray : AngularFireArrayService,
    dbFactory : Firebase) : FirebaseCRUD {
    return new FirebaseCRUD($q, $firebaseArray, dbFactory);
  }

  angular.module('smz.services')
    .factory('FirebaseCRUDFactory', FirebaseCRUDFactory);


}
