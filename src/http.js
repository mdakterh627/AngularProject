import { Http2SecureServer } from "http2";

angular.module("myApp")
.constant("dataUrl", "http://localhost:3000/x")
.controller("myCtrl", function($scope, $http, dataUrl){
    $scope.data = {};

    $http.get(dataUrl)
    .success(function(data){
        $scope.data.x = data;

    })
    .error(function(error){
        $scope.data.error = error;
    })
})