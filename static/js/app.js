var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("login", {
            url: '/',
            templateUrl: "partials/login.html"
        })
        .state("home", {
            url: '/home',
            templateUrl: "partials/home.html"
        });
    $urlRouterProvider.otherwise("/");
});

app.config(["$locationProvider", function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);