(function () {
"use strict";

angular.module('public')
.component('info', {
  templateUrl: 'src/public/myinfo/info.html',
  controller: InfoController
})
.run(init);


InfoController.$inject = ['$state','ApiPath', 'UserInfoService'];
function InfoController(ApiPath, UserInfoService) {
  var infocrtl = this;
  infocrtl.basePath = ApiPath;
  infocrtl.user = UserInfoService.getUser();

}

function init($state) {
  if (!UserInfoService.isRegistered()) {
    $state.go('public.registration');
  }
}

})();
