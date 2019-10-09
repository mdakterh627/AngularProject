var app = angular.module('myBooking', []);
app.controller('BookingCtrl', function($scope){
    console.log("in my controller...")
    $scope.newBooking = {};
    $scope.clickedBooking = {};
    
    $scope.Bookings = [
        {username: "Akter", email: "akterh627@gmail.com" },
        {username: "Akter", email: "akterh627@gmail.com",},
        {username: "Akter", email: "akterh627@gmail.com"}
    ];
    

    $scope.saveBooking = function(){
        $scope.Bookings.push($scope.newBooking);
        $scope.newBooking = {};
    };
    $scope.selectBooking=function(Booking){
        console.log(Booking);
        $scope.clickedBooking = Booking;  


    };
    $scope.updateBooking=function(){

    };
    $scope.deleteBooking =function(){
        $scope.Bookings.splice($scope.Bookings.indexOf($scope.clickedBooking), 1)
    };

});