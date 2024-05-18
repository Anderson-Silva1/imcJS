// Programa que recebe 4 valores:
// 1. Nome
// 2. Idade
// 3. Peso
// 4. Altura

// Criação da função para pegar apenas os 2 primeiros números decimais de um número Float
function formatFloat(num) {
    return parseFloat(num.toFixed(2));
}

// Declarando variáveis
const nome = document.getElementById("name");
const age = document.getElementById("number");
const resposta = document.getElementById("resultado");
const weight = document.getElementById("peso");
const height = document.getElementById("altura");
const btn = document.getElementById("btn");

// Criando um ouvidos na Variável btn com o evento "click"
btn.addEventListener("click", function () {
    // Função que vai calcular o IMC do usuário
    const imc = weight.value / height.value ** 2;

    // estrutura de decisão onde vai determinar se estou abaixo, acima ou no peso ideal para minha altura, segundo as regras do IMC
    if (imc < 18.5) {
        resposta.innerHTML = `Olá ${nome.value} de ${age.value
            } anos de idade, é um prazer conhecê-lo... Informamos que você precisa engordar mais um pouco, pois seu IMC é de ${formatFloat(
                imc
            )}`; /* Usando a função que criamos */
    } else if (imc >= 18.5 && imc <= 24.9) {
        resposta.innerHTML = `Olá ${nome.value} de ${age.value
            } anos de idade, é um prazer conhecê-lo... Informamos que você está no peso ideal para sua altura, pois seu IMC é de ${formatFloat(
                imc
            )}`;
    } else if (imc >= 25 && imc <= 29.9) {
        resposta.innerHTML = `Olá ${nome.value} de ${age.value
            } anos de idade, é um prazer conhecê-lo... Informamos que você precisa emagrecer, pois seu IMC é de ${formatFloat(
                imc
            )}`;
    } else {
        resposta.innerHTML =
            "Informamos que urgentemente você precisa emagresser!!! seu imc é de " +
            formatFloat(imc);
    }
});

// btn.addEventListener('click', function() {
//     const imc = weight.value / (height.value**2)

//     if (imc < 18.5) {
//         texto_resposta = `Olá ${nome.value} de ${age.value} anos de idade, é um prazer conhece-lo... Informamos que você precisa engordar mais um pouco pois seu IMC é de ${formatFloat(imc)}`
//     } else if (imc >= 18.5 && imc <= 24.9){
//         resposta.innerHTML = `Olá ${nome.value} de ${age.value} anos de idade, é um prazer conhece-lo... Informamos que você esta no peso ideal para sua altura pois seu IMC é de ${formatFloat(imc)}`
//     } else if (imc > 30) {
//         resposta.innerHTML = `Olá ${nome.value} de ${age.value} anos de idade, é um prazer conhece-lo... Informamos que vocêemagresser pois seu IMC é de ${imc}`
//     } else {
//         resposta.innerHTML = "É impossível calcular o resultado"
//     }
// })
