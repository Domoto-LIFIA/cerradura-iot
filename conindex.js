var config = {
    apiKey: "AIzaSyDvYspcTQ5ffod6iC4Y46voR5ye7Rjfuew",
    authDomain: "cerraduraiot.firebaseapp.com",
    databaseURL: "https://cerraduraiot.firebaseio.com",
    projectId: "cerraduraiot",
    storageBucket: "cerraduraiot.appspot.com",
    messagingSenderId: "1054576273338"
  };
firebase.initializeApp(config);
var signIn = document.getElementById('entrar')


signIn.addEventListener('click', function(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('pw').value;
  firebase.auth().signInWithEmailAndPassword(username,password).then(function(){
    document.location.href = 'paginaTwo.html'
  }).catch(function(error){
    if(error != null)
      document.getElementById("tarjetaError").innerHTML = "<blockquote class='fondoRojo textoFondoRojo' id ='error_ingreso'>Ingreso de contraseña y usuario incorecto </blockquote>";
      return
  })


})
