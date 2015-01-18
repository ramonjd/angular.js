angular.module('ie8Test.home', []).controller('homeCtrl', function ($scope) {

  $scope.message = 'This is the home view';

  $scope.name = 'Foo';

  $scope.updateName = function () {
    $scope.name = $scope.name + Math.random();
  };

  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var people = [
    {
      name: 'Joe',
      age: 20
  },
    {
      name: 'Jane',
      age: 27
  },
    {
      name: 'Mick',
      age: 32
  }
 ]

  // test copy
  $scope.people = angular.copy(people);

  // test extend
  angular.extend($scope, {

    options: [
      {
        label: 'Item 1',
        value: 1
      },
      {
        label: 'Item 2',
        value: 2
      },
      {
        label: 'Item 3',
        value: 3
      }
  ],

    model: {},

    addOption: function () {

      var i = $scope.options[$scope.options.length - 1].value + 1;

      $scope.options.push({
        label: 'Item ' + i,
        value: i
      });
    }

  });

});
