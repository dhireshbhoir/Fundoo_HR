/**
 *bankInfoForm Controller
 */

angular.module('fundooApp')
    .controller('bankInfoFormController', function($scope, $state, localStorageService) {

        console.log("BankInformation");
        var bankJsonObject;
        var bank_Info_Object;

        //function performing on next button in form    
        $scope.next = function() {
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
        bank_Info_Object = localStorageService.getData().bank_information;

        fieldArray = ['panNo', 'bankName', 'accountNumber', 'bankIfscCode'];
        jsonKeyArray = ['pan', 'bank_name', 'bank_account_number', 'bank_ifsc_code'];
        for (i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = bank_Info_Object[jsonKeyArray[i]];
        }

    });
