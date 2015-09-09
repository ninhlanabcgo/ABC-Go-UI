angular.module('abcGoApp', ['ionic']);

angular.module('abcGoApp').controller('AppCtrl', function () {
    ionic.Platform.ready(function () {

    });

});
//Navigate
angular.module('abcGoApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('menu', {
                url: "/menu",
                abstract: true,
                templateUrl: "component/menu.html",
                controller: 'MenuCtrl'
            })
            .state('menu.tabs', {
                url: "/tab",
                views: {
                    'menuContent': {
                        templateUrl: "component/tabs.html"
                    }
                }
            })
            .state('menu.tabs.buttons', {
                url: "/buttons",
                views: {
                    'buttons-tab': {
                        templateUrl: "component/buttons.html",
                        controller: 'ButtonsTabCtrl'
                    }
                }
            })
            .state('menu.tabs.list', {
                url: "/list",
                views: {
                    'list-tab': {
                        templateUrl: "component/list.html",
                        controller: 'ListCtrl'
                    }
                }
            })
            .state('menu.tabs.item', {
                url: "/item",
                views: {
                    'list-tab': {
                        templateUrl: "component/item.html"
                    }
                }
            })
            .state('menu.tabs.form', {
                url: "/form",
                views: {
                    'form-tab': {
                        templateUrl: "component/form.html"
                    }
                }
            })
            .state('menu.keyboard', {
                url: "/keyboard",
                views: {
                    'menuContent': {
                        templateUrl: "component/keyboard.html"
                    }
                }
            })
            .state('menu.slidebox', {
                url: "/slidebox",
                views: {
                    'menuContent': {
                        templateUrl: "component/slidebox.html",
                        controller: 'SlideboxCtrl'
                    }
                }
            })
            .state('menu.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "component/about.html"
                    }
                }
            })
            .state('menu.dash', {
                url: "/dash",
                views: {
                    'menuContent': {
                        templateUrl: "templates/page-dash-board.html"
                    }
                }
            })
            .state('menu.list', {
                url: '/list',                
                 views: {
                    'menuContent': {
                        templateUrl: 'templates/page-list.html'
                    }
                }
            })
            .state('menu.detail', {
                url: '/detail',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/page-detail.html'
                    }
                }                
            })
            .state('menu.tabs.account', {
                url: "/account",
                views: {
                    'list-tab': {
                        templateUrl: "templates/page-account.html",
                        controller: 'ListCtrl'
                    }
                }
            });

    $urlRouterProvider.otherwise("menu/dash");
});