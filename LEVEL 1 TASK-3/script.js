
let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
      outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }

}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);

}


//  Button Click Sound Effect 

const soundButtons = document.querySelectorAll('.Sound');

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundKey = button.getAttribute('data-sound');
        const sound = document.getElementById(soundKey + 'Sound');
        if (sound) {
            sound.currentTime = 0; // Reset audio to start
            sound.play(); // Play the audio
        }
    });
});

// THE END 