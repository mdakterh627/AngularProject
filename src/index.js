var app = angular.module('myApp', []);
app.controller('authController', function($scope){
    $scope.login = function(){
        if($scope.userName == 'akterh' && $scope.password=='12345'){
            alert("Login Success")
        }
    };
    $scope.signUp = function(){
        alert($scope.userName)
    }

});