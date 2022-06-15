app=angular.module("libms",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/login',{
        templateUrl: "login.html"
    })
    .when('/filt_by_name',{
        templateUrl: "filt_by_name.html"
    })
    .when('/filt_by_id',{
        templateUrl: "filt_by_id.html"
    })
    .when('/filt_by_intime',{
        templateUrl: "filt_by_intime.html"
    });
});
