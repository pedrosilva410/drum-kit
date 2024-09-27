var drumButtons = document.querySelectorAll(".drum");

// Attach click event listener using event delegation
drumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleInteraction(this.innerHTML);
  });
});

// Attach keydown event listener
document.addEventListener("keydown", function (event) {
  handleInteraction(event.key);
});

// Combined function to handle sound and animation
function handleInteraction(key) {
  makeSound(key);
  buttonAnimation(key);
}

// Play sound based on key pressed
function makeSound(key) {
  const sounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3",
  };

  if (sounds[key]) {
    var audio = new Audio(sounds[key]);
    audio.play();
  } else {
    console.log(key);
  }
}

// Add button animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
