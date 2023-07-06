function outcome(){
    var valor1 = Number(window.document.getElementById("num-one").value)
    var valor2 = Number(window.document.getElementById("num-two").value)

    var resultado = window.document.getElementById("resultArea")
    if(window.document.getElementById('box1').checked){
        resultado.innerHTML = "Resultado: " + String(valor1 + valor2)
    }else if(window.document.getElementById('box2').checked){
        resultado.innerHTML = "Resultado: " + String(valor1 - valor2)
    }else if(window.document.getElementById('box3').checked){
        resultado.innerHTML = "Resultado: " + String(valor1 * valor2)
    }else{
        resultado.innerHTML = "Resultado: " + String(valor1 / valor2)
    }
}

//Sempre que for extrair o valor de input de html: .value
//Sempre que quiser saber se uma caixa foi assinalada .checked no id da box