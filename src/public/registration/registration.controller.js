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
    var userInfo = {
      firstName: reg.user.firstName,
      lastName: reg.user.lastName,
      email: reg.user.email,
      phone: reg.user.phone,
      menuShortName: reg.user.menuShortName

    };
    UserInfoService.saveUserInfo(userInfo);
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
