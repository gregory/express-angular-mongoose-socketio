define(['controllers/controllers'], function(controllers){
  controllers.controller('propertiesCtrl', ['$scope', function($scope){
    $scope.filterging = {}
    $scope.properties = [
      {id: 1, name: 'The Uptown', img: '', price: 2000, bed: '2-3', location: 'San Francisco'},
      {id: 2, name: 'Lake View Towers', img: '', price: 2010, bed: '2-3', location: 'San francisco'},
      {id: 3, name: 'Merritt on 3rd', img: '', price: 2200, bed: '2-3', location: 'New York'},
      {id: 4, name: 'Northgate Family Residences', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 5, name: 'Foo2', img: '', price: 1900, bed: '2-3', location: 'New York'},
      {id: 6, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'},
      {id: 7, name: 'Foo1', img: '', price: 10, bed: '2-3', location: 'San francisco'},
      {id: 3, name: 'Foo2', img: '', price: 10, bed: '2-3', location: 'New York'}
    ];
  }]);
});
