(function() {
"use strict";

angular.module('public')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = ['MenuService', 'ApiPath'];
function UserInfoService(MenuService, ApiPath) {
  var service = this;



  /**
   * Load the current user with username and token
   */
  service.saveUserInfo = function(user) {
    service.user = user;

  };


  service.getUser = function() {
    return MenuService.getMenuItem(service.user.menuShortName).then(function(data) {
      service.user.menuItem = data;
      return user;
    });

  };


  service.isRegistered = function() {
    return service.user.lastName !== '';
  };

 }



})();
