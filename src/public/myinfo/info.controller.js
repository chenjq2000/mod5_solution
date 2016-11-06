(function () {
"use strict";


angular.module('public')
.controller('InfoController', InfoController);



InfoController.$inject = ['$rootScope','$state','ApiPath', 'UserInfoService'];
function InfoController($rootScope,$state,ApiPath, UserInfoService) {
  var infoCtrl = this;
  infoCtrl.basePath = ApiPath;
  if (!UserInfoService.isRegistered()) {
    $state.go('public.registration');
  }
  else {
    UserInfoService.getUser().then(function(data) {
      infoCtrl.user = data;
    });
  }

  infoCtrl.$onInit = function($state) {
      console.log("onInit called");
  }

}



})();
