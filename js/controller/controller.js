'use strict'

function handleLetterClick(event) {
    let letterIsInWord=checkLetter(getLetter(event));
    //letter bestaat niet ? toon volgende deel galg

    if(getGameActive()) {
        if(!letterIsInWord){
            showMessage('Helaas, verkeerde letter');
            drawHangMan(getNumberOfWrongCharacters());
        } else {
            showMessage('Juiste letter');
        }

        if(isWinner())
        {
            console.log('Winner');
            showMessage('Je hebt gewonnen, klik op een letter voor nieuw spel');
            setGameInActive();
        }
        if(isLosser())
        {
            console.log('Losser');
            showMessage('Je hebt verloren, klik op een letter voor nieuw spel.'+getSelectedWord());
            setGameInActive();
        }
    } else {
        initModel();
        showWord(getSelectedWord(),[])
        drawHangMan(0);
        showMessage('Klik op een letter om te beginnen');
        setGameActive();
    }

}

