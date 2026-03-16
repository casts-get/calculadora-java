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

function mostrarResultado(valor){
    document.getElementById("resultado").innerText = "Resultado: " + valor;
}

function somar(){
    let valores = pegarValores();
    if(!valores) return;

    let resultado = valores.n1 + valores.n2;
    mostrarResultado(resultado);
}

function subtrair(){
    let valores = pegarValores();
    if(!valores) return;

    let resultado = valores.n1 - valores.n2;
    mostrarResultado(resultado);
}

function multiplicar(){
    let valores = pegarValores();
    if(!valores) return;

    let resultado = valores.n1 * valores.n2;
    mostrarResultado(resultado);
}

function dividir(){
    let valores = pegarValores();
    if(!valores) return;

    if(valores.n2 === 0){
        alert("Não é possível dividir por zero.");
        return;
    }

    let resultado = valores.n1 / valores.n2;
    mostrarResultado(resultado);
}
