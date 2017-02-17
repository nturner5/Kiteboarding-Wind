angular.module('myApp')
.controller('mapCtrl', function($scope, mainSvc){
    $scope.mapresize = function(){
    setTimeout(function(){ Map.resize(); }, 10);
}

})

