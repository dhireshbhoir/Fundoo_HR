/**
 *qualificationData Controller
 */

angular.module('fundooApp')
    .controller('qualificationDataController', function($scope, $state, localStorageService) {

        console.log("Qualification");
        var qualificationJsonObject;
        var QualificationDataObject;

        $scope.disciplineList = ["Computer", "IT", "Civil", "Electrical", "Electronic", "Mechanical"];

        $scope.next = function() {
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
            localStorageService.setData("qualification_data", qualificationJsonObject)
        };

        QualificationDataObject = localStorageService.getData().qualification_data;
        fieldArray = ['diploma', 'degree', 'selectedDiscipline', 'yearOfPassing', 'aggregate', 'finalYear', 'trainingInstitute', 'trainingDuration', 'training'];
        jsonKeyArray = ['diploma', 'degree', 'discipline', 'year_of_passing', 'aggregate', 'final_year', 'training_institute', 'training_duration', 'training'];
        for (i = 0; i < fieldArray.length; i++) {
            $scope[fieldArray[i]] = QualificationDataObject[jsonKeyArray[i]];
        }

    });
