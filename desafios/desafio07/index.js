let valorRandom;
let userNumbers = []

function init(){
    valorRandom = valorAleatorio();
}

function refresh(){
    window.location.reload()
}

function valorAleatorio(){
    return Math.floor(Math.random() * 100 + 1);
}

function compareNumbers(){
    let nTentativas = window.document.getElementById('attempts');
    let dica = window.document.getElementById('textOutput');

    const userNumber = Number(window.document.getElementById('inputBox').value);
    userNumbers.push(' ' + userNumber);
    window.document.getElementById('guesses').innerHTML = userNumbers;
    
    console.log(userNumbers.length);
    
    if(userNumbers.length == 5){
        refresh();
    }

    if(userNumber > valorRandom){
        dica.innerHTML = 'O valor foi alto, tente um menor!';
        nTentativas.innerHTML = userNumbers.length + '/5';
        window.document.getElementById('inputBox').value = '';
    }else if(userNumber < valorRandom){
        dica.innerHTML = 'O valor foi baixo, tente um maior!';
        nTentativas.innerHTML = userNumbers.length + '/5';
        window.document.getElementById('inputBox').value = '';
    }else{
        dica.innerHTML = 'PARABENS, VOCÊ ACERTOU!';
    }
}
