var angularApp = angular.module('angularExample',[]);

angularApp.controller('personCtrl', function ($scope){
	
	console.log("inside ctrllr");
	
	$scope.myVar = "";
	/*$scope.inp1 = "sample";
	$scope.inp2 = "text";*/

	$scope.upperCase = function(){
		console.log("inside ctrllr");
		console.log("inside upperCase");
		$scope.myVar = ($scope.inp1+$scope.inp2).toUpperCase();
	}

	$scope.lowerCase = function(){
		console.log("inside lowerCase");
		$scope.myVar = ($scope.inp1+$scope.inp2).toLowerCase();
	}
});
