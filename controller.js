angular.module('myApp')
.controller('mainCtrl', function($scope, mainSvc){
    $scope.test = "working";
    $scope.test1 = mainSvc.test1;
    $scope.showme = true;
    $scope.windTest1 = false;
    $scope.windTest2 = false;
    $scope.windTest3 = false;
    $scope.navShow = false;
    

mainSvc.getDataSsb($scope).then(function(info){
      $scope.ssb = info;
       if (info.wind.speed > 12){
          $scope.windTest1 = true;
          alert( "Wind Conditions are kiteable at Utah Lake: South Sandy Beach")
      }
  })


  mainSvc.getDataDeercr($scope).then(function(inf){
      $scope.deerCr = inf;
      if (inf.wind.speed > .2){
          $scope.windTest2 = true;
           alert( "Wind Conditions are kiteable at Deer Creek right now")
      }
  })

  
mainSvc.getDataLindon($scope).then(function(inform){
      $scope.lindon = inform;
      console.log(inform.wind.speed)
       if (inform.wind.speed > 12){
          $scope.windTest3 = true;
           alert( "Wind Conditions are kiteable at Lindon beach right now")
      }
      
  })



});



