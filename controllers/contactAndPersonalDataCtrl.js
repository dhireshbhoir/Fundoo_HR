/**
 * contactAndPersonalData Controller
 */

angular.module('fundooApp')
    .controller('contactAndPersonalDataController', function($scope, $http, $state, localStorageService, restService) {
        console.log("inside personalForm");

        var contactAndPersonalJsonObject;
        var contactAndPersonalDataObject;


        //$scope.emailFormat = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        /*function for copying the address*/
        $scope.sameAsAbove = function() {
            if ($scope.hasChecked) {
                $scope.permanantAddress = $scope.currentAddress;
            } else {
                $scope.permanantAddress = "";
            }
        }

        /*jQuery for showing datepicker*/
        $('#sandbox-container input').datepicker({
            autoclose: true
        });

        /*function to submit employee data*/
        $scope.storeData = function(file) {
            $scope.Loading = true;
            console.log(file);
            contactAndPersonalJsonObject = {
                "mobile_number": Number.parseInt($scope.mobileNumber),
                "email_id": $scope.emailId,
                "date_of_birth": $scope.birthDate,
                "father_name": $scope.fatherName,
                "father_mobile_number": Number.parseInt($scope.fatherMobileNumber),
                "father_occupation": $scope.fatherOccupation,
                "annual_salary": $scope.annualSalary,
                "current_address": $scope.currentAddress,
                "permanent_address": $scope.permanantAddress
            }

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("contact_and_personal_data", contactAndPersonalJsonObject)

            console.log(localStorageService.getData());
            var fd = new FormData();
            fd.append("file", file);
            fd.append("engineer_data", JSON.stringify(localStorageService.getData()));

            /*calling postRequest from restService to store data on server*/
            restService.postRequest('createEngineerData', fd)
                .then(function(data, status, headers, config) {
                    console.log("Successful", data.data);
                    sessionStorage.setItem('successData', JSON.stringify(data.data));
                    // localStorage.removeItem("EmployeeData");
                    $state.go('successful');
                }, function(error) {
                    alert(error);
                });
        };

        /*calling getData from localStorageService to get data from localstorage*/
        contactAndPersonalDataObject = localStorageService.getData().contact_and_personal_data;
        fieldArray = ['mobileNumber', 'emailId', 'birthDate', 'fatherName', 'fatherMobileNumber', 'fatherOccupation', 'annualSalary', 'currentAddress', 'permanantAddress'];
        jsonKeyArray = ['mobile_number', 'email_id', 'date_of_birth', 'father_name', 'father_mobile_number', 'father_occupation', 'annual_salary', 'current_address', 'permanent_address'];
        for (i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = contactAndPersonalDataObject[jsonKeyArray[i]];
        }

        $(document).ready(function() {
            function disableBack() {
                window.history.forward()
            }
            $(this).scrollTop(0);
            window.onload = disableBack();
            window.onpageshow = function(evt) {
                if (evt.persisted) disableBack()
            }


            // window.history.forward(-1)


        });
    });
