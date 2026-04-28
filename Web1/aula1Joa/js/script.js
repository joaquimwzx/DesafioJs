function minhaFuncao() {
    document.write("Ola Sao Lucas!");
    document.write("<br><a href='index.html'>Voltar</a>");
}

function pergunta() {
    let nome = prompt("Qual é o seu nome?");
    document.getElementById("res1").innerHTML = "Seu nome é: " + nome;
}

function mostrarTexto() {
    let texto = document.getElementById("entrada").value;
    document.getElementById("res2").innerHTML = "VOCE ESCREVEU: " + texto;
}

function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite número válido");
    } else {
        document.getElementById("res3").innerHTML = num1 + num2;
    }
}

function mediaEscolar() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let media = (n1 + n2 + n3) / 3;

    if (media > 7) {
        document.getElementById("res4").innerHTML = "APROVADO " + media;
    } else {
        document.getElementById("res4").innerHTML = "REPROVADO " + media;
    }
}

function converterDolar() {
    let reais = parseFloat(document.getElementById("reais").value);
    let cotacao = parseFloat(document.getElementById("cotacao").value);

    let dolar = reais / cotacao;
    document.getElementById("res5").innerHTML = dolar.toFixed(2);
}

function calcularArea() {
    let a = parseFloat(document.getElementById("altura").value);
    let l = parseFloat(document.getElementById("largura").value);

    document.getElementById("res6").innerHTML = a * l + " m²";
}

function vizinhos() {
    let n = parseFloat(document.getElementById("numero").value);

    document.getElementById("res7").innerHTML = (n - 1) + " " + n + " " + (n + 1);
}

function parOuImpar() {
    let n = parseFloat(document.getElementById("numero2").value);

    if (n % 2 === 0) {
        document.getElementById("res8").innerHTML = "PAR";
    } else {
        document.getElementById("res8").innerHTML = "ÍMPAR";
    }
}

function radar() {
    let v = parseFloat(document.getElementById("velocidade").value);

    if (v > 120) {
        document.getElementById("res9").innerHTML = "GRAVÍSSIMA";
    } else if (v > 80) {
        document.getElementById("res9").innerHTML = "MULTADO";
    } else {
        document.getElementById("res9").innerHTML = "OK";
    }
}

function habilitacao() {
    let nasc = parseInt(document.getElementById("nascimento").value);
    let atual = parseInt(document.getElementById("anoAtual").value);

    let idade = atual - nasc;

    if (idade >= 18) {
        document.getElementById("res10").innerHTML = "Pode dirigir";
    } else {
        document.getElementById("res10").innerHTML = "Não pode dirigir";
    }
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura2").value);

    let imc = peso / (altura * altura);

    if (imc < 25) {
        document.getElementById("res11").innerHTML = "Peso ideal " + imc.toFixed(2);
    } else {
        document.getElementById("res11").innerHTML = "Acima do peso " + imc.toFixed(2);
    }
}

function calcularDesconto() {
    let v = parseFloat(document.getElementById("valorCompra").value);

    let desconto = v > 500 ? v * 0.15 : v * 0.05;

    document.getElementById("res12").innerHTML = (v - desconto).toFixed(2);
}

function compararNumeros() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);

    if (a > b) {
        document.getElementById("res13").innerHTML = a + " maior";
    } else {
        document.getElementById("res13").innerHTML = b + " maior";
    }
}