// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('DiseaseRegistry', ['ionic', 'DiseaseRegistry.controllers', 'DiseaseRegistry.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.tabs.style('standard').position('bottom');
        $ionicConfigProvider.navBar.alignTitle('center').positionPrimaryButtons('left');
        $ionicConfigProvider.tabs.position('bottom');
        // $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.form.checkbox('circle');
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html',
                controller: 'CohortsListCtrl'
            })

            // Each tab has its own nav history stack:

            .state('tab.CohortsList', {
                url: '/CohortsList',
                views: {
                    'tab-CohortsList': {
                        templateUrl: 'templates/tab-CohortsList.html',
                        controller: 'CohortsListCtrl'
                    }
                }
            })
            .state('tab.cohort-detail', {
                url: '/Details',
                views: {
                    'tab-CohortsList': {
                        templateUrl: 'templates/cohort-detail.html',
                        controller: 'CohortsListCtrl'
                    }
                }
            })

            .state('tab.AddCohort', {
                url: '/AddCohort',
                views: {
                    'tab-newCohort': {
                        templateUrl: 'templates/tab-AddCohort.html',
                        controller: 'AddCohortCtrl'
                    }
                }
            })

            .state('tab.Analysis', {
                url: '/Analysis',
                views: {
                    'tab-Analysis': {
                        templateUrl: 'templates/tab-Analysis.html',
                        controller: 'GraphCtrl'

                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/CohortsList');

    });
