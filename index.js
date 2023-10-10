function playAudio(audioType){
    var audioSoundFile = "/sounds/" + audioType + ".mp3";
    var audio = new Audio(audioSoundFile);
    audio.play();
}

function makeSound(key) {
    switch (key) {
        case "w":
            playAudio("crash");
            break;
        case "a":
            playAudio("kick-bass");
            break;
        case "s":
            playAudio("snare");
            break;
        case "d":
            playAudio("tom-1");
            break;
        case "j":
            playAudio("tom-2");
            break;
        case "k":
            playAudio("tom-3");
            break;
        case "l":
            playAudio("tom-4");
            break;
        default:
            break;
    }
}

function keyboardAnimation(key){
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
    
}

document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        keyboardAnimation(buttonInnerHTML);
    })
})

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    keyboardAnimation(event.key)
});
