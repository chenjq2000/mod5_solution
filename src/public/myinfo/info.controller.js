(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/myinfo/info.html',
  controller: InfoController
})



InfoController.$inject = ['$rootScope','$state','ApiPath', 'UserInfoService'];
function InfoController(ApiPath, UserInfoService) {
  var infocrtl = this;
  infocrtl.basePath = ApiPath;
  infocrtl.user = UserInfoService.getUser();

  infocrtl.$onInit = function($state) {
    if (!UserInfoService.isRegistered()) {
      $state.go('public.registration');
    }
  }

}



})();
