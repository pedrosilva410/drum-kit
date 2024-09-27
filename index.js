const drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        var crash = new Audio("./sounds/crash.mp3");
        crash.play;
        console.log("iii");

        break;

      default:
        break;
    }
  });
}

//var audio = new Audio();
//audio.play;
