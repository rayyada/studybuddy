'use strict'

var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
        .state("login.about", {
            url: 'about',
            templateUrl: "partials/login.about.html"
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
        .state("home.group", {
            url: '/:class/:owner',
            templateUrl: "partials/home.group.html",
            controller: "GroupCtrl"
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
        })
        .state("home.add.create", {
            url: '/create',
            templateUrl: "partials/home.add.create.html"
        })
        .state("home.add.join", {
            url: '/join',
            templateUrl: "partials/home.add.join.html",
            controller: "GroupsCtrl"
        })
        .state("home.buddy", {
            url: '/:username',
            templateUrl: "partials/home.buddy.html",
            controller: 'BuddyCtrl'
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

app.controller('UserGroupsCtrl', function($scope, $http) {
    $http.get("data/usergroups.json").success(function(data) {
        $scope.groups = data;
    });
});


app.controller('GroupsCtrl', function($scope, $http) {
    $http.get("data/groups.json").success(function(data) {
        $scope.groups = data;
    });
});

app.controller('GroupCtrl', function($scope, $http, $state, $stateParams) {

    $scope.class = $stateParams.class;
    $scope.owner = $stateParams.owner;

    $http.get("data/groups.json").success(function(data) {
        $scope.groups = data;
        $scope.group = getGroup($scope.groups, $scope.class, $scope.owner);
    });

    function getGroup(data, subject, owner) {
        for(var i = 0; i < data.length; i += 1) {
            if(data[i].class === subject && data[i].owner === owner) {
                return data[i];
            }
        }
        return 0;
    }
});

app.controller('BuddiesCtrl', function($http, $scope) {
    $http.get("data/buddies.json").success(function(data) {
        $scope.buddies = data;
    });
});

app.controller('BuddyCtrl', function($http, $scope, $state, $stateParams) {

    $scope.name = $stateParams.username;

    $http.get("data/buddies.json").success(function(data) {
        $scope.buddies = data;
        $scope.buddy = getByUsername($scope.buddies, $scope.name);
    });

    function getByUsername(data, name) {
        for(var i = 0; i < data.length; i += 1) {
            if(data[i].username === name) {
                return data[i];
            }
        }
        return 0;
    }
});

app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                        else
                        {
                            return false;
                        }
                    });
                }
            };
    }])