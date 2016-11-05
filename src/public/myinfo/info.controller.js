(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/myinfo/info.html',
  bindings: {
    user: '<'
  },
  controller: InfoController
});


InfoController.$inject = ['$state','ApiPath', 'UserInfoService'];
function InfoController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  if (!UserInfo.isRegistered()) {
    $state.go('public.registration');
  }
}

})();
