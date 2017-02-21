/**
 *Successful controller
 */

angular.module('fundooApp')
    .controller('successController', function($scope, $state, successfulService) {

        console.log("Inside success");
        console.log(successfulService.successData);
        $scope.name = successfulService.successData.engineer_name;
        $scope.imgUrl = successfulService.successData.img_url;
        $scope.emailId = successfulService.successData.email_id;
        $scope.mobileNumber = successfulService.successData.mobile_number;
    });
