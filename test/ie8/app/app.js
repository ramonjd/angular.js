(function () {
	'use strict';

	angular.module('ie8Test', [
		'ie8Test.home',
		'ie8Test.about',
		'ie8Test.directives',
		'ie8Test.filters',
		'ngRoute',
		'ngAria',
		'ngAnimate',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize'
	])

	.factory('config', function () {
		return {
			foo: 'bar'
		};
	})

	.run(function ($rootScope, $http, config) {

		$http.get('data.json').then(function (d) {
			console.log('$http: ' + JSON.stringify(d.data))
		});

		$rootScope.$on('$routeChangeStart', function (event, next, current) {
			console.log('$routeChangeStart');
		});

		// test jquery ajax to check if monkey patch breaks it	
		var jqxhr = $.ajax('data.json')
			.done(function (data) {
				console.log('jquery: ' + JSON.stringify(data));
			})
			.fail(function () {
				console.log('jquery error');
			})
			.always(function () {
				console.log('jquery always');
			});

	})

	.config(function ($routeProvider) {

		$routeProvider
			.when('/home', {
				templateUrl: 'app/home/home.tmpl.html',
				controller: 'homeCtrl'
			})

		.when('/about', {
			templateUrl: 'app/about/about.tmpl.html',
			controller: 'aboutCtrl'
		})

		.otherwise({
			redirectTo: '/home'
		});
	});

}());