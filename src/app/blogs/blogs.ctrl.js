require("../app.js");

(function () {

  "use strict";

  angular.module("intellyBlog").controller("BlogsCtrl", ["BlogsService", function (BlogsService) {
    var vm = this;

    vm.blogs = [];

    initialize();

    function initialize () {
      getBlogs();
    }

    function getBlogs () {
      BlogsService.get().then(function (resp) {
        vm.blogs = resp.data;
      });
    }
  }]);

})();
