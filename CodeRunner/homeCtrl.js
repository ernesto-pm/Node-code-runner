angular.module('codeRunner').controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$scope','$http'];

function homeCtrl($scope,$http) {

    $scope.code= "public class Test{\n" +
        "   public static void main(String[] args){\n" +
        "       System.out.println(\"Hello world!\");\n" +
        "   }\n" +
        "}" ;

    $scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'text/x-java',
        theme: 'monokai'
    };

  $scope.sendCode = function(){
    //console.log($scope.code);
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
