// https://teachablemachine.withgoogle.com/models/ZHuZDEduL/ 
//Webcam for the machine to recognize
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach('#camera')
//starts function
function take_snapshot() {
    //code for taking snap shot
    Webcam.snap(function(data_uri){
        //getting the element result
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5 version:',ml5.version)
//the real thing that decides what the item is
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZHuZDEduL/model.json',modelLoaded)

function modelLoaded(){
    console.log('ModelLoaded!')
}

function check(){
    //storing the captured image in the variable
    img=document.getElementById('captured_image')
    //classifier is the variable that stores the link
    classifier.classify(img,gotResult)
}
//Starting the function
function gotResult(error,results){
    //if condition for error
    if (error) {
        //uploads error if there is one
        console.error(error)
        //else condition
    } else {
        //uploads the results
        console.log(results)
        //it says the object name
        //we are taking the the 0th position label
       document.getElementById("result_object_name").innerHTML=results[0].label
       //accuracy of the object and rounding it to the 1000ths decimal place
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}
