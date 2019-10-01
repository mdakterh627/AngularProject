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
app.controller('authController', function($scope, $http){
    $scope.login = function(){
        $scope.test="Please enter a valid password or user name"
        if($scope.userName == 'akter' && $scope.password=='1234'){
            window.location.href="/Dashboard.html"
            // alert("Login Success")
        }
    };
    $scope.signUp = function(){
        alert($scope.userName)
    }
    function getData(){
        $http.get("https://reqres.in/api/users?page=2").then(function(response){
            console.log('response', response)
            $scope.data = response.data;

        })

    }

});