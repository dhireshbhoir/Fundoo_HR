/**
 *engineerForm Controller
 */

angular.module('fundooApp')
    .controller('engineerFormController', function($scope, $state, localStorageService) {
        console.log("inside EngForm");

        var engineerJsonObject;
        var engineerDataObject;

        $scope.cityList = ["Mumbai", "Banglore", "Pune", "Hyaderabad", "Chennai"];

        $scope.next = function() {
            engineerJsonObject = {
                "name": $scope.name,
                "hire_city": $scope.hireCity,
                "original_submitted": {
                    "engineer_certificates": $scope.EngineerCertificates,
                    "final_year_marksheet": $scope.FinalYearMarksheet
                }
            }

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("engineer_data", engineerJsonObject)
            console.log(localStorageService.getData());
        };

        engineerDataObject = localStorageService.getData().engineer_data;
        $scope.name = engineerDataObject["name"];
        $scope.hireCity = engineerDataObject["hire_city"];
        $scope.EngineerCertificates = engineerDataObject["original_submitted"]["engineer_certificates"];
        $scope.FinalYearMarksheet = engineerDataObject["original_submitted"]["final_year_marksheet"];


    });