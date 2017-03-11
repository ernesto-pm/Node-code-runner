angular.module('codeRunner').controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope','$http'];

function homeCtrl($scope,$http) {

  $scope.sendCode = function(){
    console.log($scope.code);
    $http.defaults.headers.post["Content-Type"] = "text/plain";

    $http.post('/',$scope.code).then(
      function success(response){
        $scope.stdout = response;
      },
      function error(response){
        $scope.stdout = response;
      }
    )
  }

}
