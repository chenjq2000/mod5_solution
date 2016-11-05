(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject = [ 'UserInfoService','MenuService'];
function RegistrationController() {
  var reg = this;
  reg.user.firstName = '';
  reg.user.lastName= '';
  reg.user.email = '';
  reg.user.phone = '';
  reg.user.menuShortName = '';

  reg.submit = function () {
    reg.submitted = true;
    UserInfoService.saveUserInfo(reg.user.firstName, reg.user.lastName,reg.user.email, reg.user.phone, reg.user.menuShortName);
    reg.completed = true;
  };

  reg.isMenuShortNameValid = function() {
    return MenuService.getMenuItem(reg.user.menuShortName).then(function(data) {
        console.log(data);
        return true;
    });
  }
}

})();
