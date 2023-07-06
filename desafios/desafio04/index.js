function update(){
    let conta = Number(window.document.getElementById('yourBill').value);
    let porcentagem = Number(window.document.getElementById('tipInput').value);
    let pessoas = Number(window.document.getElementById('splitInput').value);
    
    let gorgeta = conta * (porcentagem / 100);
    let totalDaConta = conta + gorgeta;
    let divisaoPessoa = totalDaConta / pessoas;

    window.document.getElementById('tipPercent').innerHTML = porcentagem + ' %';
    window.document.getElementById('splitValue').innerHTML = pessoas;
    window.document.getElementById('totalWithTip').innerHTML = totalDaConta;
    window.document.getElementById('billEach').innerHTML = divisaoPessoa;
    window.document.getElementById('tipValue').innerHTML = gorgeta;
    
}