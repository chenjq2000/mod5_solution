(function () {
"use strict";


angular.module('public')
.controller('InfoController', InfoController);



InfoController.$inject = ['$rootScope','$state','ApiPath', 'UserInfoService'];
function InfoController($rootScope,$state,ApiPath, UserInfoService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  UserInfoService.getUser().then(function(data) {
    $ctrl.user = data;
  }

  $ctrl.$onInit = function($state) {
    if (!UserInfoService.isRegistered()) {
      $state.go('public.registration');
    }
  }

}



})();
