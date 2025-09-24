'use strict'

const hangmanCanvas = document.getElementsByClassName('hangman')[0];
const ctx = hangmanCanvas.getContext('2d');
const wordContainer = document.getElementsByClassName('word-display')[0];
const messageHTML=document.getElementsByClassName('message')[0];

function showWord(selectedWord, correctLetters)
{

    let selectedWordArray = selectedWord.split('');
    let  display='';

    for (let i = 0; i < selectedWordArray.length; i++) {
        if (correctLetters.includes(selectedWordArray[i])) {
            display=display+selectedWordArray[i];
        } else{
            display=display+"_";
        }
    }
    //console.log(display);
    wordContainer.innerHTML=display;
}

function getLetter(event) {
    return event.innerText.toLowerCase();
}

function showMessage(message) {
    messageHTML.innerHTML = message;
}
function drawHangMan(errors)
{

        ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
        if (errors > 0) {
            // Draw parts of the hangman depending on the number of wrong letters
            // Base
            ctx.fillRect(10, 180, 100, 10);
            // Pole
            ctx.fillRect(50, 10, 10, 170);
            // Top beam
            ctx.fillRect(50, 10, 80, 10);
            // Rope
            ctx.fillRect(120, 10, 10, 30);
        }
        if (errors > 1) {
            // Head
            ctx.beginPath();
            ctx.arc(125, 50, 20, 0, Math.PI * 2);
            ctx.stroke();
        }
        if (errors > 2) {
            // Body
            ctx.fillRect(120, 70, 10, 50);
        }
        if (errors > 3) {
            // Left arm
            ctx.moveTo(125, 80);
            ctx.lineTo(100, 100);
            ctx.stroke();
        }
        if (errors > 4) {
            // Right arm
            ctx.moveTo(125, 80);
            ctx.lineTo(150, 100);
            ctx.stroke();
        }
        if (errors > 5) {
            // Left leg
            ctx.moveTo(125, 120);
            ctx.lineTo(100, 150);
            ctx.stroke();
        }
        if (errors > 6) {
            // Right leg
            ctx.moveTo(125, 120);
            ctx.lineTo(150, 150);
            ctx.stroke();

        }
}

