angular.module('rtfmApp') 
.controller('mainPageController', function($scope, $location, userService, threadService, fb, $firebaseAuth){ 

    $scope.user = userService.getLoggedInUser(); 

    $scope.newThreadTitle = ''; 

    $scope.time12 = Firebase.ServerValue.TIMESTAMP;

    $scope.threads = threadService.getAllThreads(); 

    $scope.threads.$loaded().then(function(){ 
        console.log($scope.threads) 
    }); 

 
    function getip(json){
      alert(json.ip); // alerts the ip address
    } ; 

   $scope.logout = function(){        
        //Todo: actually log out;
        $location.path('login');
    }


    $scope.addThread = function(){ 
        if(!$scope.newThreadTitle){ 
            return false; //Don't do anything if the text box is empty 
        } 
        var newThread = { 
            title: $scope.newThreadTitle, 
            Text12: $scope.Text12, 
            username: $scope.OriginUser, 
            time12: $scope.time12,
            comments: [] 
        }; 

        $scope.threads.$add(newThread); 

        $scope.newThreadTitle = ''; //Clear the text in the input box 
        $scope.Text12 = ''; //Clear the text in the input box 
        $scope.OriginUser = ''; //Clear the text in the input box 
    } 

    $scope.logout = function(){ 
        userService.logout(); 
    } 

});