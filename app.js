angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/') //so home page always shows up
        $urlRouterProvider.otherwise('/404') //custom 404 page

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
            .state('wind', {
                url: '/wind',
                templateUrl: 'wind/wind.html',
                controller: "windCtrl"
            })
            .state('photos', {
                url: '/photos',
                templateUrl: 'photos/photos.html',
                controller: "photosCtrl"
            })
            .state('map', {
                url: '/map',
                templateUrl: 'map/map.html',
                controller: "mapCtrl"
            })

            .state('player', {
                url: '/player/:id', //the : is saying that youre calling on the ide paramater
                templateUrl: "player/player.html",
                controller: "playerCtrl"
            })
            .state('404', {
                url: '/404',
                template: 'Nothing here!'
            })
    });