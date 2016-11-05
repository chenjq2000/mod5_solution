(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);
RegistrationController.$inject = [ 'UserInfoService','MenuService'];
function RegistrationController() {
  var reg = this;
  reg.firstName = '';
  reg.lastName= '';
  reg.email = '';
  reg.phone = '';
  reg.menuShortName = '';

  reg.submit = function () {
    reg.submitted = true;
    var userInfo = {
      firstName: reg.firstName,
      lastName: reg.lastName,
      email: reg.email,
      phone: reg.phone,
      menuShortName: reg.menuShortName

    };
    UserInfoService.saveUserInfo(userInfo);
    reg.completed = true;
  };

  reg.isMenuShortNameValid = function() {
    return MenuService.getMenuItem(reg.menuShortName).then(function(data) {
        console.log(data);
        return true;
    });
  }
}

})();
