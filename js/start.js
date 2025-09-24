"use strict"

window.onload=start;


function start()
{
    const buttons = document.querySelectorAll('.letters button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleLetterClick(button);
        })

    })
    initModel();
    showWord(getSelectedWord(),[])
    drawHangMan(0);
    showMessage('Klik op een letter om te beginnen');
    setGameActive();
}


