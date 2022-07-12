//https://teachablemachine.withgoogle.com/models/cjFIseYlK/

prediction_1 = ""
prediction_2 = ""

Webcam.set({
height: 300,
width: 350,
image_format: 'png',
png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach('#camera')

function takepicture(){

Webcam.snap(function(datauri){
document.getElementById("result").innerHTML = '<img id ="capturedimage" src ="'+datauri+'"/>';
});
}


console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cjFIseYlK/model.json', modelLoaded);

function modelLoaded(){
console.log("Model is Loaded")
}


function speak(){

synth = window.speechSynthesis
speak_data_1= "The first predicion is"+prediction_1;
speak_data_2= "and the second predicion is"+prediction_2;

utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
synth.speak(utterthis)
}

function predict(){
img = document.getElementById('capturedimage');
classifier.classify(img, GotResult);
}


function GotResult(error, results){

if (error){
console.error(error);
}
else{

console.log(results);
document.getElementById("result_handgesture_name").innerHTML = results[0].label;
document.getElementById("result_handgesture_name2").innerHTML = results[1].label;

prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();

if(results[0].label == "Ok"){
  document.getElementById("update_handgesture").innerHTML = "&#128076;";   
}

if(results[0].label == "Thumbs Up"){
    document.getElementById("update_handgesture").innerHTML = "&#128077;";  
  }

  if(results[0].label == "Peace"){
    document.getElementById("update_handgesture").innerHTML = "&#9996;";   
  }

  if(results[0].label == "Thumbs Down"){
    document.getElementById("update_handgesture").innerHTML = "&#128078;";   
  }

  if(results[0].label == "Pray"){
    document.getElementById("update_handgesture").innerHTML = "&#128079;";   
  }
  
  if(results[0].label == "Arm"){
    document.getElementById("update_handgesture").innerHTML = "&#9995;";   
  }


  if(results[1].label == "Ok"){
    document.getElementById("update_handgesture2").innerHTML = "&#128076;";   
  }
  
  if(results[1].label == "Thumbs Up"){
      document.getElementById("update_handgesture2").innerHTML = "&#128077;";   
    }
  
    if(results[1].label == "Peace"){
      document.getElementById("update_handgesture2").innerHTML = "&#9996;";   
    }
  
    if(results[1].label == "Thumbs Down"){
      document.getElementById("update_handgesture2").innerHTML = "&#128078;";   
    }
  
    if(results[1].label == "Pray"){
      document.getElementById("update_handgesture2").innerHTML = "&#128079;";   
    }
    
    if(results[1].label == "Arm"){
      document.getElementById("update_handgesture2").innerHTML = "&#9995;";   
    }

}
}