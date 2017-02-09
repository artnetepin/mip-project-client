angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.posts = [
      {avatar:"img/placeholder-image.png",name:"9gag",image:"img/placeholder-image.png",likes:"10",description:"Lorem",comments:""},
      {avatar:"img/placeholder-image.png",name:"8gag",image:"img/placeholder-image.png",likes:"11",description:"ipsum",comments:""},
      {avatar:"img/placeholder-image.png",name:"7gag",image:"img/placeholder-image.png",likes:"12",description:"dolor",comments:""},
      {avatar:"img/placeholder-image.png",name:"6gag",image:"img/placeholder-image.png",likes:"13",description:"sit amet",comments:""}
    ]

}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.searchGrid = [
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"}
    ]

}])

.controller('postCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPlatform, $cordovaCamera) {


}])

.controller('galleryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cameraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http) {
  $scope.takePhoto = function() {
      var options =  {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE
      };

      $ionicPlatform.ready(function() {
          $cordovaCamera.getPicture(options).then(function(imageData) {
              $scope.picture = imageData;
          }, function(err) {
           // error
          });
      });
  }

  $scope.uploadPhoto = function() {
      var options = new FileUploadOptions()
      options.fileKey = "image";

      $cordovaFileTransfer.upload('http://image-upload-example-server.herokuapp.com/upload', $scope.picture, options).then(function(result) {
          console.log("File upload complete");
          console.log(result);
          $scope.uploadResults = "Upload completed successfully"
      }, function(err) {
          console.log("File upload error");
          console.log(err);
          $scope.uploadResults = "Upload failed"
      }, function (progress) {
          // constant progress updates
          console.log(progress);
      });
  }

  $scope.testConnection = function() {
      $http.get('http://image-upload-example-server.herokuapp.com/').then(function(result){
          $scope.serverConnection = "Connection OK";
      },
      function(err){
          $scope.serverConnection = "Connection fail";
      });

  }

}])

.controller('likesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.postGrid = [
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"},
      {image:"img/placeholder-image.png"}
    ]

}])

.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
