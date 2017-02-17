angular.module('myApp')
.service('mainSvc', function ($http){
    this.test1 = "service works"

this.getDataSsb = function(){
        return $http ({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Provo,ut&APPID=563af3b58d0c827d35380c25910666b4",
          
            
        }).then(function(results){
            
return results.data;
        })
    }
this.getDataDeercr = function(){
        return $http ({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Charleston,ut&APPID=563af3b58d0c827d35380c25910666b4",
          
            
        }).then(function(results){
            
return results.data;
        })
    }

this.getDataLindon = function(){
        return $http ({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Lindon,ut&APPID=563af3b58d0c827d35380c25910666b4",
          
            
        }).then(function(results){
            
return results.data;
        })
    }

this.resize = function() {
     if(this.map) google.maps.event.trigger(this.map, 'resize');
}

})