var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var obj = null;
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED4 = new Gpio(4, 'out'); //use GPIO pin 4, es el verde
var LED17 = new Gpio(17, 'out'); //use GPIO pin 17, es el rojo

var blinkInterval = setInterval(blinkLED, 3000); //run the blinkLED function every 3000ms
function blinkLED() { //function to start blinking
    xhr.open("GET", "http://cerradura-iot.herokuapp.com/api/status", false);
    xhr.send();
    console.log(xhr.status);
    console.log(xhr.responseText);
    obj = JSON.parse(xhr.responseText);
    
    if(obj.isOpen){
       console.log("Abrir");
       LED4.writeSync(1);
       LED17.writeSync(0);

    }else{
       LED4.writeSync(0);
       LED17.writeSync(1);
       console.log("Cerrar");
    }
  }
  
