/**
 *qualificationData Controller
 */

angular.module('fundooApp')
    .controller('qualificationDataController', function($scope, $state, localStorageService) {

        /*page scroll position to top at page load*/
        $(document).ready(function() {
            $(this).scrollTop(0);
        });

        var qualificationJsonObject;
        var QualificationDataObject;

        $scope.disciplineList = ["Computer", "IT", "Civil", "Electrical", "Electronic", "Mechanical"];

        var year = [];
        for (i = new Date().getFullYear(); i > 1990; i--) {
            year.push(i);
        }
        $scope.yearOptions = year;

        //function performing on next button in form
        $scope.next = function() {
            $scope.Loading = true;
            qualificationJsonObject = {
                "diploma": $scope.diploma,
                "degree": $scope.degree,
                "discipline": $scope.selectedDiscipline,
                "year_of_passing": Number.parseInt($scope.yearOfPassing),
                "aggregate": Number.parseInt($scope.aggregate),
                "final_year": Number.parseInt($scope.finalYear),
                "training_institute": $scope.trainingInstitute,
                "training_duration": Number.parseInt($scope.trainingDuration),
                "training": $scope.training
            };

            /*calling setData from localStorageService to store data in localstorage*/
            localStorageService.setData("qualification_data", qualificationJsonObject)
        };

        /*calling getData from localStorageService to get data from localstorage*/
        QualificationDataObject = localStorageService.getData().qualification_data;
        fieldArray = ['diploma', 'degree', 'selectedDiscipline', 'yearOfPassing', 'aggregate', 'finalYear', 'trainingInstitute', 'trainingDuration', 'training'];
        jsonKeyArray = ['diploma', 'degree', 'discipline', 'year_of_passing', 'aggregate', 'final_year', 'training_institute', 'training_duration', 'training'];
        for (i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = QualificationDataObject[jsonKeyArray[i]];
        }

    });
