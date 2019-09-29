var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "src/login.html",
        controller:"authController"
    }).when("/SignUp.html",{
        templateUrl: "src/SignUp.html",
        controller: "authController"
    })
});
app.controller('authController', function($scope){
    $scope.login = function(){
        $scope.test="dddd"
        if($scope.userName == 'ah' && $scope.password=='345'){
            window.location.href="/Dashboard.html"
            // alert("Login Success")
        }
    };
    $scope.signUp = function(){
        alert($scope.userName)
    }

});