# DesafioJs
desafio 6
java```
function mediaEscolar() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Digite notas válidas");
    } else {
        let media = (nota1 + nota2 + nota3) / 3;

        if (media > 7.0) {
            document.getElementById("res4").innerHTML =
                "Sua nota é " + media.toFixed(2) + " - APROVADO!";
        } else {
            document.getElementById("res4").innerHTML =
                "Sua nota é " + media.toFixed(2) + " - REPROVADO!";
        }
    }
}
desafio 7
java```
function converterDolar() {
    let reais = parseFloat(document.getElementById("reais").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);

    if (isNaN(reais) || isNaN(cotacao) || cotacao === 0) {
        alert("Digite valores válidos");
    } else {
        let dolar = reais / cotacao;
        document.getElementById("res5").innerHTML =
            "R$ " + reais + " = $ " + dolar.toFixed(2);
    }
}
desafio 8
java```
function calcularArea() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);

    if (isNaN(altura) || isNaN(largura)) {
        alert("Digite valores válidos");
    } else {
        let area = altura * largura;
        document.getElementById("res6").innerHTML =
            "Área total: " + area + " m²";
    }
}
desafio 9
function vizinhos() {
    let num = parseFloat(document.getElementById("numero").value);

    if (isNaN(num)) {
        alert("Digite um número válido");
    } else {
        let antecessor = num - 1;
        let sucessor = num + 1;

        document.getElementById("res7").innerHTML =
            antecessor + " " + num + " " + sucessor;
    }
}
desafio 10
function parOuImpar() {
    let num = parseFloat(document.getElementById("numero2").value);

    if (isNaN(num)) {
        alert("Digite um número válido");
    } else {
        if (num % 2 === 0) {
            document.getElementById("res8").innerHTML =
                "O número " + num + " é PAR";
        } else {
            document.getElementById("res8").innerHTML =
                "O número " + num + " é ÍMPAR";
        }
    }
}
desafio 11
function radar() {
    let velocidade = parseFloat(document.getElementById("velocidade").value);

    if (isNaN(velocidade)) {
        alert("Digite uma velocidade válida");
    } else {
        if (velocidade > 120) {
            document.getElementById("res9").innerHTML =
                "INFRAÇÃO GRAVÍSSIMA!";
        } else if (velocidade > 80) {
            document.getElementById("res9").innerHTML =
                "MULTADO!";
        } else {
            document.getElementById("res9").innerHTML =
                "Velocidade dentro do limite.";
        }
    }
}
desafio 12
java```
function habilitacao() {
    let nascimento = parseInt(document.getElementById("nascimento").value);
    let atual = parseInt(document.getElementById("anoAtual").value);

    if (isNaN(nascimento) || isNaN(atual)) {
        alert("Digite anos válidos");
    } else {
        let idade = atual - nascimento;

        if (idade >= 18) {
            document.getElementById("res10").innerHTML =
                "Você já pode dirigir! (Idade: " + idade + ")";
        } else {
            document.getElementById("res10").innerHTML =
                "Você ainda não tem idade para dirigir. (Idade: " + idade + ")";
        }
    }
}
desafio 13
java```
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura2").value);

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert("Digite valores válidos");
    } else {
        let imc = peso / (altura * altura);

        if (imc < 25) {
            document.getElementById("res11").innerHTML =
                "IMC: " + imc.toFixed(2) + " - Você está no peso ideal.";
        } else {
            document.getElementById("res11").innerHTML =
                "IMC: " + imc.toFixed(2) + " - Atenção: Você está acima do peso ideal.";
        }
    }
}
desafio 14
java```
function calcularDesconto() {
    let valor = parseFloat(document.getElementById("valorCompra").value);

    if (isNaN(valor)) {
        alert("Digite um valor válido");
    } else {
        let desconto;
        let valorFinal;

        if (valor > 500) {
            desconto = valor * 0.15;
        } else {
            desconto = valor * 0.05;
        }

        valorFinal = valor - desconto;

        document.getElementById("res12").innerHTML =
            "O valor final da sua compra é R$ " + valorFinal.toFixed(2);
    }
}
desafio 15
java```
function compararNumeros() {
    let num1 = parseFloat(document.getElementById("numA").value);
    let num2 = parseFloat(document.getElementById("numB").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite números válidos");
    } else if (num1 === num2) {
        document.getElementById("res13").innerHTML =
            "Os dois números são iguais.";
    } else if (num1 > num2) {
        document.getElementById("res13").innerHTML =
            "O número " + num1 + " é maior que o número " + num2;
    } else {
        document.getElementById("res13").innerHTML =
            "O número " + num2 + " é maior que o número " + num1;
    }
}
