(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject = [ 'UserInfoService','MenuService'];
function RegistrationController(UserInfoService,MenuService) {
  var reg = this;
  reg.firstName = '';
  reg.lastName= '';
  reg.email = '';
  reg.phone = '';
  reg.menuShortName = '';
  reg.invalidMenuCode = false;
  reg.completed = false;

  reg.submit = function () {
    var userInfo = {
      firstName: reg.firstName,
      lastName: reg.lastName,
      email: reg.email,
      phone: reg.phone,
      menuShortName: reg.menuShortName

    };
    if (reg.isMenuShortNameValid()) {
      UserInfoService.saveUserInfo(userInfo);
      reg.completed = true;
    }
    else {
      reg.invalidMenuCode = true;
    }
  };

  reg.isMenuShortNameValid = function() {
    return MenuService.getMenuItem(reg.menuShortName).then(function(data) {
        console.log(data);
        return true;
    });
  }
}

})();
