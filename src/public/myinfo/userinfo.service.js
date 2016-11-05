(function() {
"use strict";

angular.module('public')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = ['MenuService', 'ApiPath'];
function UserInfoService() {
  var service = this;
  service.user.firstName = '';
  service.user.lastName = '';
  service.user.email = '';
  service.user.phone = '';
  service.user.menuShortName = '';
  service.user.menuItem;

  /**
   * Load the current user with username and token
   */
  service.saveUserInfo = function(firstName, lastName,email, phone, menuShortName) {
    service.user.firstName= firstName;
    service.user.lastName = lastName;
    service.user.email = email;
    service.user.phone = phone;
    service.user.menuShortName = menuShortName;
  };


  service.getUser = function() {
    return MenuService.getMenuItem(reg.user.menuShortName).then(function(data) {
      service.user.menuItem = data;
      return user;
    });

  };


  service.isRegistered = function() {
    return service.user.lastName !== '';
  };


 }



})();
