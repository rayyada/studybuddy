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
        });
    $urlRouterProvider.otherwise("/");
});

app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

