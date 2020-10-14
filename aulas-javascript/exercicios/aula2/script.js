function saoDiferentes () {
    let input1 = document.getElementById("numero1").value;
    let input2 = document.getElementById("numero2").value;

    
    if (input1 !== input2)  {
        let dife = document.creatElement ('div');
        dife.innerText = 'Os valores são diferentes';
        document.body.append(dife);
        dife.style.color = 'red';
        
    }

    else {
        let ig = document.createElement('div');
        ig.innerText = 'Não são diferentes';
        ig.style.color = 'green'; 
        document.body.append(ig);
    }
}

resetar.onclick = funcion resetar () {
    document.getElementById("numero1").value = '';
    document.getElementById("numero2").value = '';
    document.querySelector('div').remove();
}
