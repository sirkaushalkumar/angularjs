angular.module("tutorialCtrlModule",[])
.controller("TutorialCtrl",["$scope",function($scope){
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "My Title";
    $scope.tutorialObject.bindOutput = 4;
    $scope.timesFour = function(){
        $scope.tutorialObject.bindOutput *= 4;
    }
}]);