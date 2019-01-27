$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyC4nfhg9uTHxs1rYFIsBCNqYcOJK90YwKo",
    authDomain: "online-auction-system-fd88f.firebaseapp.com",
    databaseURL: "https://online-auction-system-fd88f.firebaseio.com",
    projectId: "online-auction-system-fd88f",
    storageBucket: "online-auction-system-fd88f.appspot.com",
    messagingSenderId: "494368208155"
  };
  firebase.initializeApp(config);


  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var contactsRef = dbRef.ref('contacts')
  var usersRef = dbRef.ref('users')
  var auth = null;

  console.log("register new user");
  //Register new user 
  $('#registerForm').on('submit', function (e){
    console.log('button triggered');
    e.preventDefault();
    var data = {
      email: $('#registerEmail').val(), //get the email from Form
      fullName: $('#registerFullName').val(), // get fullName
      
    };
    var passwords = {
      password : $('#registerPassword').val(), //get the pass from Form
      cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
    }
    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ){
      if( passwords.password == passwords.cPassword ){
        //create the user
        
        firebase.auth()
          .createUserWithEmailAndPassword(data.email, passwords.password)
          .then(function(user) {
            return user.updateProfile({
              displayName: data.fullName
            })
          })
          /*.then(function(user){
            //now user is needed to be logged in to save data
            auth = user;
            //now saving the profile data
            usersRef.child(user.uid).set(data)
              .then(function(){
                console.log("User Information Saved:", user.uid);
              })
            $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
            
            $('#messageModal').modal('hide');
          })*/
          .catch(function(error){
            console.log("Error creating user:", error);
            $('#messageModalLabel').html(spanText('ERROR: '+error.code))
          });
      } else {
        //password and confirm password didn't match
        $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
      }
    }  
  });