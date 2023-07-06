let cores = ['red', 'blue', 'yellow'];

function update(){
    let corAtual = window.document.querySelector('.color'); 
    let cor = cores[numeroAleatorio()]

    document.body.style.backgroundColor = cor;
    corAtual.textContent = cor;
}

function numeroAleatorio(){
    return Math.floor(Math.random() * cores.length);
}