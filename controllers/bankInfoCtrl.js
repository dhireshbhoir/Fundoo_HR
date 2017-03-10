/**
 *bankInfoForm Controller
 */

angular.module('fundooApp')
    .controller('bankInfoFormController', function($scope, $state, localStorageService) {

        /*page scroll position to top at page load*/
        $(document).ready(function() {
            $(this).scrollTop(0);
        });

        var bankJsonObject;
        var bankInfoObject;

        //function performing on next button in form
        $scope.next = function() {
            $scope.Loading = true;
            bankJsonObject = {
                "pan": $scope.panNo,
                "bank_name": $scope.bankName,
                "bank_account_number": Number.parseInt($scope.accountNumber),
                "bank_ifsc_code": $scope.bankIfscCode
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("bank_information", bankJsonObject)
        };

        /*calling getData from localStorageService to get data from localstorage*/
        bankInfoObject = localStorageService.getData().bank_information;

        fieldArray = ['panNo', 'bankName', 'accountNumber', 'bankIfscCode'];
        jsonKeyArray = ['pan', 'bank_name', 'bank_account_number', 'bank_ifsc_code'];
        for (i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = bankInfoObject[jsonKeyArray[i]];
        }

    });
