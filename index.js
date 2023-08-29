/* var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

} */

playApp();

function playApp(){

  var soundFiles = {
    "w":"sounds/tom-1.mp3",
    "a":"sounds/tom-2.mp3",
    "s":"sounds/tom-3.mp3",
    "d":"sounds/tom-4.mp3",
    "j":"sounds/snare.mp3",
    "k":"sounds/crash.mp3",
    "l":"sounds/kick-bass.mp3"
  }
  
    document.addEventListener("keydown", function(event) {
      if( ["a","s","w","d","j","k","l"].includes(event.key) )
        playDrum(event.key, soundFiles);
    });
  
    document.addEventListener("click", function(event) {
      if( event.target.classList[1] === "drum") 
        playDrum(event.target.classList[0], soundFiles);
  
    });

}

function playDrum(key, soundFiles){
  makeSound(key, soundFiles);
  makeAnimation(key);
}

function makeSound(key, soundFiles) {
  new Audio(soundFiles[key]).play();
}

function makeAnimation(key) {

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
