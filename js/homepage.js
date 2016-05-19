var app = angular
    .module('MyApp', ['ngMaterial','ngMessages'])

    .controller('BasicDemoCtrl',['$scope', function DemoCtrl($scope) {
      var originatorEv;
      $scope.schemes = [{name:'Scheme1'},{name:'Scheme2'},{name:'Scheme3'},{name:'Scheme4'},{name:'Scheme5'},{name:'Scheme6'}];
      this.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
      };
    }])

    .controller('AppCtrl', ['$scope', '$mdDialog', function($scope,$mdDialog) {
    $scope.showInMobile = true;
    //$scope.imagePath = 'images1.jpg';
    
    $scope.names = [ 

    {name1 : 'Related Schemes',
    name2:[{"src":"images/image1.jpg","title":"Scheme1","subhead":"subhead1","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image2.jpg","title":"Scheme2","subhead":"subhead2","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image3.jpg","title":"Scheme3","subhead":"subhead3","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image4.jpg","title":"Scheme4","subhead":"subhead4","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image5.jpg","title":"Scheme5","subhead":"subhead5","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."}]},

    {name1 : 'Recent Schemes',
    name2:[{"src":"images/image11.jpg","title":"Scheme1","subhead":"subhead1","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image12.jpg","title":"Scheme2","subhead":"subhead2","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image13.jpg","title":"Scheme3","subhead":"subhead3","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image14.jpg","title":"Scheme4","subhead":"subhead4","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image15.jpg","title":"Scheme5","subhead":"subhead5","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."}]},

    {name1 : 'Popular Schemes',
    name2:[{"src":"images/image6.jpg","title":"Scheme1","subhead":"subhead1","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image7.jpg","title":"Scheme2","subhead":"subhead2","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image8.jpg","title":"Scheme3","subhead":"subhead3","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image9.jpg","title":"Scheme4","subhead":"subhead4","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."},
    {"src":"images/image10.jpg","title":"Scheme5","subhead":"subhead5","dsc":"The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."}]}

                  ];
    $scope.showAdvanced = function(ev) {
	    $mdDialog.show({
	      controller: DialogController,
	      templateUrl: 'login_dialog.html',
	      parent: angular.element(document.body),
	      targetEvent: ev,
	      clickOutsideToClose:true
	    })
  	};
   }]);
	function DialogController($scope, $mdDialog) {
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	}
	function search_header() {
		window.location = "search_results.html";
  }
    