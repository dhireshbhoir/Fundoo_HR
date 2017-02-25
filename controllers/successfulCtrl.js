/**
 *Successful controller
 */

angular.module('fundooApp')
    .controller('successController', function($scope, $state) {

        var success = JSON.parse(sessionStorage.getItem('successData'));
        console.log(success);
        console.log("Inside success");
        $scope.name = success.engineer_name;
        $scope.imgUrl = success.img_url;
        $scope.emailId = success.email_id;
        $scope.mobileNumber = success.mobile_number;
    });
