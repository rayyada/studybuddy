'use strict'

var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
            abstract: 'true',
            url: '/',
            templateUrl: "partials/login.html"
        })
        .state("login.login", {
            url: '',
            templateUrl: "partials/login.login.html"
        })
        .state("login.register", {
            url: 'register',
            templateUrl: "partials/login.register.html"
        })
        .state("home", {
            abstract: true,
            url: '/home',
            templateUrl: "partials/home.html"
        })
        .state("home.groups", {
            url: '',
            templateUrl: "partials/home.groups.html"
        })
        .state("home.buddies", {
            url: '/buddies',
            templateUrl: "partials/home.buddies.html"
        })
        .state("home.profile", {
            url: '/profile',
            templateUrl: "partials/home.profile.html"
        })
        .state("home.add", {
            url: '/add',
            templateUrl: "partials/home.add.html"
        });
    $urlRouterProvider.otherwise("/");
});

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.controller('UserCtrl', function($http, $scope) {
    $http.get("data/user.json").success(function(data) {
        $scope.user = data;
    });
});

app.controller('GroupCtrl', function($scope, $http) {
    $http.get("data/groups.json").success(function(data) {
        $scope.groups = data;
    });
});

app.controller('BuddyCtrl', function($http, $scope) {
    $http.get("data/buddies.json").success(function(data) {
        $scope.buddies = data;
    });
});

