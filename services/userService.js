angular.module('rtfmApp').service('userService', function($firebaseAuth, fb, $location){ 

    //Todo: don't hardcode this 
    var user = { 
        name: '' 
    }; 
    var ref = new Firebase(fb.url); 
    var authObj = $firebaseAuth(ref); 
    // Log in user if already logged 

    // Set the user object if already logged in on page refresh 
    var info = authObj.$getAuth(); 
    if(info){ 
      user.name = info.google.displayName; 
    }  

    this.getLoggedInUser = function(){ 
      return user; 
    } 

    this.loginWithGoogle = function(){ 
      authObj.$authWithOAuthPopup("google").then(function(authData) { 
            user.name = authData.google.displayName; 
            $location.path('main') 
            }).catch(function(error) { 
            console.error("Authentication failed:", error); 
            }); 
    } 

    this.logout = function(){ 
      authObj.$unauth() 
      $location.path('login'); 
    }; 
});