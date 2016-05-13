angular
    .module('MyApp', ['ngMaterial'])
    .controller('BasicDemoCtrl', function() {
      var originatorEv;
      this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
      };
    })
    .controller('AppCtrl', ['$scope', '$mdDialog','$mdSidenav',function($scope,$mdDialog,$mdSidenav) {

      $scope.schemes = [{name:'Scheme1'},{name:'Scheme2'},{name:'Scheme3'},{name:'Scheme4'},{name:'Scheme5'},{name:'Scheme6'}];
      $scope.names = [{name1 : 'Filter catageory 1',name2:['Scheme1','Scheme2','Scheme3']},
                      {name1 : 'Filter catageory 2',name2:['Scheme1','Scheme2','Scheme3']},
                      {name1 : 'Filter catageory 3',name2:['Scheme1','Scheme2','Scheme3']},
                      {name1 : 'Filter catageory n',name2:['Scheme1','Scheme2','Scheme3']}
                     ];
      $scope.image = [
                      {name:'Scheme 1',src:"images/image1.jpg",title:'Scheme 1 Title',preview:'Scheme 1 Preview',dsc:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
                      {name:'Scheme 2',src:"images/image2.jpg",title:'Scheme 2 Title',preview:'Scheme 2 Preview',dsc:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
                      {name:'Scheme 3',src:"images/image3.jpg",title:'Scheme 3 Title',preview:'Scheme 3 Preview',dsc:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
                      {name:'Scheme n',src:"images/image4.jpg",title:'Scheme n Title',preview:'Scheme n Preview',dsc:"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."}
                     ];
      $scope.showInMobile = true;
      //$scope.imagePath = 'images1.jpg';                     
      $scope.myFuncOpen = function() {
        $mdSidenav('left').open();
      };
      $scope.myFuncClose = function() {
        $mdSidenav('left').close();
      };
      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'dialog1.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        });
      };
    }]);
    function DialogController($scope, $mdDialog) {
     
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }