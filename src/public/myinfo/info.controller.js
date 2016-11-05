(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/myinfo/info.html',
  controller: InfoController
})



InfoController.$inject = ['$rootScope','$state','ApiPath', 'UserInfoService'];
function InfoController($rootScope,$state,ApiPath, UserInfoService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  // $ctrl.user = UserInfoService.getUser();
  //
  // $ctrl.$onInit = function($state) {
  //   if (!UserInfoService.isRegistered()) {
  //     $state.go('public.registration');
  //   }
  // }

}



})();
