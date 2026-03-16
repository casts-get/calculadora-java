function pegarValores() {

    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;

    if(n1 === "" || n2 === ""){
        alert("Por favor, preencha os dois campos.");
        return null;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if(isNaN(n1) || isNaN(n2)){
        alert("Digite apenas números válidos.");
        return null;
    }

    return {n1, n2};
}

