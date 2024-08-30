function ageindays(){
 var birthyear = prompt('what  year were you born....good friend?');
 var ageindayss = (2023-birthyear) * 365;
 var h1 = document.createElement('h1');
 var textanswer = document.createTextNode('you are ' + ageindayss + ' days old');
 h1.setAttribute('id', 'ageindays');
 h1.appendChild(textanswer);
 document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageindays').remove();
}

//challenge 2
function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://cataas.com/cat/gif";
    div.appendChild(image);
}

//challenge 3
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll(".choice");
    const playerChoiceSpan = document.getElementById("player-choice");
    const computerChoiceSpan = document.getElementById("computer-choice");
    const resultSpan = document.getElementById("result");
    const message = document.getElementById("message");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            playerChoiceSpan.textContent = playerChoice;
            computerChoiceSpan.textContent = computerChoice;

            const result = determineWinner(playerChoice, computerChoice);
            resultSpan.textContent = result;
            message.textContent = result === "You win!" ? "Congratulations!" : "Try again!";
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});

    
//challeng 4
var all_button = document.getElementsByTagName('button');

var copyallbutton = [];
for (let i=0; i <all_button.length; i++){
    copyallbutton.push(all_button[i].classList[1]);
}
//console.log(copyallbutton);

function buttoncolorchange(buttonthingy){
    if (buttonthingy.value === 'red'){
        buttonRed();  
    } else if (buttonthingy.value === 'green'){
        buttonGreen();
    }else if (buttonthingy.value === 'reset'){
        buttoncolorReset();
    }else if (buttonthingy.value === 'random'){
        randomscolors()
    }
}

function buttonRed() {
    for (let i=0; i < all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger')
    }
}

function buttonGreen() {
    for (let i=0; i < all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success')
    }
}
function buttoncolorReset() {
    for (let i=0; i < all_button.length; i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyallbutton[i]);
    }
}

function randomscolors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i <all_button.length; i++) {
        let randomnuber = Math.floor(Math.random() *4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomnuber]);
    }
}