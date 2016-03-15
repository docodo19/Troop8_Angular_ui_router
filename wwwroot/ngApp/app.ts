namespace App {

    angular.module("MyApp", ["ui.router"]);

    angular.module("MyApp").config((
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider:ng.ui.IUrlRouterProvider) => {


        // $stateProvider is the object that lets you configure the router
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: 'ngApp/views/home.html',
                controller: App.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('About', {
                url: '/about',
                templateUrl: 'ngApp/views/about.html',
                controller: App.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('Profile', {
                url: '/profile',
                templateUrl: 'ngApp/views/profile.html',
                controller: App.Controllers.ProfileController,
                controllerAs: 'controller'
            });

        // This will enable html5Mode
        $locationProvider.html5Mode(true);
        // Sets the default route location (in this case, the Home state)
        $urlRouterProvider.otherwise('/');

    });

}