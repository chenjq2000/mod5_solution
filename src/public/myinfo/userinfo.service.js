function UserInfoService() {
  var service = this;
  var user.firstName = '';
  var user.lastName = '';
  var user.email = '';
  var user.phone = '';
  var user.menuShortName = '';
  var user.menuItem;

  /**
   * Load the current user with username and token
   */
  service.saveUserInfo = function(firstName, lastName,email, phone, menuShortName) {
    user.firstName= firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
    user.menuShortName = menuShortName;
  };


  service.getUser = function() {
    return MenuService.getMenuItem(reg.user.menuShortName).function(data) {
      user.menuItem = data;
      return user;
    }

  };


  service.isRegistered = function() {
    return user.lastName !== '';
  };

}


})();
