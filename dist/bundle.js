'use strict';

angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/'); //so home page always shows up
    $urlRouterProvider.otherwise('/404'); //custom 404 page

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    }).state('wind', {
        url: '/wind',
        templateUrl: 'wind/wind.html',
        controller: "windCtrl"
    }).state('photos', {
        url: '/photos',
        templateUrl: 'photos/photos.html',
        controller: "photosCtrl"
    }).state('map', {
        url: '/map',
        templateUrl: 'map/map.html',
        controller: "mapCtrl"
    }).state('player', {
        url: '/player/:id', //the : is saying that youre calling on the ide paramater
        templateUrl: "player/player.html",
        controller: "playerCtrl"
    }).state('404', {
        url: '/404',
        template: 'Nothing here!'
    });
});
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, mainSvc) {
    $scope.test = "working";
    $scope.test1 = mainSvc.test1;
    $scope.showme = false;
    $scope.windTest1 = false;
    $scope.windTest2 = false;
    $scope.windTest3 = false;
    $scope.navShow = false;

    mainSvc.getDataSsb($scope).then(function (info) {
        $scope.ssb = info;
        if (info.wind.speed > 12) {
            $scope.windTest1 = true;
            $scope.bestWind = 'Utah Lake: South Sandy Beach';
            //   alert( "Wind Conditions are kiteable at Utah Lake: South Sandy Beach")
        }
    });

    mainSvc.getDataDeercr($scope).then(function (inf) {
        $scope.deerCr = inf;
        if (inf.wind.speed > .2) {
            $scope.windTest2 = true;
            $scope.bestWind = 'Deer Creek Resorvoir';

            //    alert( "Wind Conditions are kiteable at Deer Creek right now")
        }
    });

    mainSvc.getDataLindon($scope).then(function (inform) {
        $scope.lindon = inform;
        console.log(inform.wind.speed);
        if (inform.wind.speed > 12) {
            $scope.windTest3 = true;
            $scope.bestWind = 'Deer Creek Resorvoir';

            //    alert( "Wind Conditions are kiteable at Lindon beach right now")
        }
    });
});
'use strict';

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 40.2338, lng: -111.6585 }
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [['South Sandy Beach', 40.169446, -111.741807, 4], ['Deer Creek Launch', 40.458868, -111.472710, 5], ['Lindon Launch', 40.316300, -111.7648527, 3], ['Manly Beach', -33.80010128657071, 151.28747820854187, 2], ['Maroubra Beach', -33.950198, 151.259302, 1]];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}

// // SLIDEOUT MENU

// $(document).ready(function() {
//   var $toggleButton = $('.toggle-button');
//   $toggleButton.on('click', function() {
//     $(this).toggleClass('button-open');
//   });
// });

// $(document).ready(function() {
//     var $toggleButton = $('.toggle-button'),
//         $menuWrap = $('.menu-wrap');

//     $toggleButton.on('click', function() {
//         $(this).toggleClass('button-open');
//         $menuWrap.toggleClass('menu-show');
//     });
// });

// $(document).ready(function() {
//     var $sidebarArrow = $('.sidebar-menu-arrow');
//     $sidebarArrow.click(function() {
//         $(this).next().slideToggle(300);
//     });
'use strict';

angular.module('myApp').service('mainSvc', function ($http) {
    this.test1 = "service works";

    this.getDataSsb = function () {
        return $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Provo,ut&APPID=563af3b58d0c827d35380c25910666b4"

        }).then(function (results) {

            return results.data;
        });
    };
    this.getDataDeercr = function () {
        return $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Charleston,ut&APPID=563af3b58d0c827d35380c25910666b4"

        }).then(function (results) {

            return results.data;
        });
    };

    this.getDataLindon = function () {
        return $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=Lindon,ut&APPID=563af3b58d0c827d35380c25910666b4"

        }).then(function (results) {

            return results.data;
        });
    };

    this.resize = function () {
        if (this.map) google.maps.event.trigger(this.map, 'resize');
    };
});
'use strict';

angular.module('myApp').controller('homeCtrl', function ($scope) {});
'use strict';

// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
console.log("foo");
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 40.26,
            lng: -111.660177
        }
    });

    setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [['South Sandy Beach', 40.167495, -111.747058, 4], ['Deer Creek Launch', 40.459040, -111.472190, 5], ['Lindon Launch', 40.316671, -111.764728, 3], ['Manly Beach', -33.80010128657071, 151.28747820854187, 2], ['Maroubra Beach', -33.950198, 151.259302, 1]];

function setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: {
                lat: beach[1],
                lng: beach[2]
            },
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}
console.log("foo");
'use strict';

angular.module('myApp').controller('mapCtrl', function ($scope, mainSvc) {
    $scope.mapresize = function () {
        setTimeout(function () {
            Map.resize();
        }, 10);
    };
});
'use strict';

angular.module('myApp').controller('photosCtrl', function ($scope) {});
'use strict';

angular.module('myApp').controller('windCtrl', function ($scope) {});
'use strict';

angular.module('myApp').directive('menuDirective', function () {
    return {
        restrict: 'EAC',
        templateUrl: './directives/menuDirective.html'

    };
});
'use strict';

angular.module('myApp').directive('slideNav', function () {
    return {
        restrict: 'EA',
        templateUrl: './directives/navDir.html'

    };
});