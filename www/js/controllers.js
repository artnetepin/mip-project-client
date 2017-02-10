angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
  $scope.posts = [
      {name:"9gag",avatar:"img/placeholder-image.png",image:"img/placeholder-image.png",likes:"10",comments:[{user:"9gag",comment:"lorem ipsum"}]},
      {name:"8gag",avatar:"img/placeholder-image.png",image:"img/placeholder-image.png",likes:"11",comments:[{user:"8gag",comment:"lorem ipsum"}]},
      {name:"7gag",avatar:"img/placeholder-image.png",image:"img/placeholder-image.png",likes:"12",comments:[{user:"7gag",comment:"lorem ipsum"}]},
      {name:"6gag",avatar:"img/placeholder-image.png",image:"img/placeholder-image.png",likes:"13",comments:[{user:"6gag",comment:"lorem ipsum"}]}
    ];

    $http.get("https://whispering-mesa-21315.herokuapp.com/post").then(function(res){
      Array.prototype.push.apply(,res.data);
    });
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

.controller('galleryCtrl', function($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http){// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    $scope.galleryPhoto = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
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
})

.controller('cameraCtrl', function($scope, $ionicPlatform, $cordovaFileTransfer, $cordovaCamera, $http){
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
})

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
