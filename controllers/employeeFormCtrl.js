/**
 *employeeForm controller
 */

angular.module('fundooApp')
    .controller('employeeFormController', function($scope, $state) {

        var empDataFormat;
        email = "admin@gmail.com";

        /* JSON object to store employee data */
        empDataFormat = {
            "engineer_data": {
                "name": "",
                "hire_city": "",
                "original_submitted": {
                    "engineer_certificates": "",
                    "final_year_marksheet": ""
                }
            },
            "bank_information": {
                "pan": "",
                "bank_name": "",
                "bank_account_number": "",
                "bank_ifsc_code": ""
            },
            "qualification_data": {
                "diploma": "",
                "degree": "",
                "discipline": "",
                "year_of_passing": "",
                "aggregate": "",
                "final_year": "",
                "training_institute": "",
                "training_duration": "",
                "training": ""
            },
            "contact_and_personal_data": {
                "mobile_number": "",
                "email_id": email,
                "date_of_birth": "",
                "father_name": "",
                "father_mobile_number": "",
                "father_occupation": "",
                "img_url": "",
                "annual_salary": "",
                "current_address": "",
                "permanent_address": ""
            }
        };

        //function performing on employee form button in form
        $scope.createObject = function() {
            $scope.Loading = true;

            /* storing empDataFormat into localstorage*/
            localStorage.setItem("EmployeeData", JSON.stringify(empDataFormat));
        };

        $(document).ready(function() {
            $(this).scrollTop(0);
            window.history.forward(-1)
        });
    });
