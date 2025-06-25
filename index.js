const prompt = require('prompt-sync')();

const senhaCorreta = "321";
let tentativas = 0;
let acessoPermitido = false;

while (tentativas < 3) {
    let senha = prompt("Digite a senha de acesso: ");
    if (senha === senhaCorreta) {
        console.log("\nAcesso permitido. Bem-vindo.\n");
        acessoPermitido = true;
        break;
    } else {
        tentativas++;
        console.log("Senha incorreta. Tentativas restantes: " + (3 - tentativas));
    }
}

if (!acessoPermitido) {
    console.log("\nAcesso bloqueado. Número máximo de tentativas excedido.");
} else {

    let opcao;
    do {
        console.log("\n===== MENU =====");
        console.log("1 Tabuada de SOMA");
        console.log("2 Tabuada de SUBTRAÇÃO");
        console.log("3 Tabuada de MULTIPLICAÇÃO");
        console.log("4 Tabuada de DIVISÃO");
        console.log("5 FATORIAL");
        console.log("6 ENCERRAR PROGRAMA");
        opcao = parseInt(prompt("Escolha uma opção: "));

        if (opcao >= 1 && opcao <= 5) {
            let numero = parseInt(prompt("Digite o número desejado: "));

            switch (opcao) {
                case 1:
                    console.log("\nTabuada de Soma para o número " + numero);
                    for (let i = 1; i <= 100; i++) {
                        console.log(numero + " + " + i + " = " + (numero + i));
                    }
                    break;

                case 2:
                    console.log("\nTabuada de Subtração para o número " + numero);
                    for (let i = 1; i <= 100; i++) {
                        console.log(numero + " - " + i + " = " + (numero - i));
                    }
                    break;

                case 3:
                    console.log("\nTabuada de Multiplicação para o número " + numero);
                    for (let i = 1; i <= 100; i++) {
                        console.log(numero + " x " + i + " = " + (numero * i));
                    }
                    break;

                case 4:
                    console.log("\nTabuada de Divisão para o número " + numero);
                    for (let i = 1; i <= 100; i++) {
                        console.log(numero + " ÷ " + i + " = " + (numero / i).toFixed(2));
                    }
                    break;

                case 5:
                    console.log("\nFatorial de " + numero);
                    let fatorial = 1;
                    for (let i = 1; i <= numero; i++) {
                        fatorial *= i;
                    }
                    console.log(numero + "! = " + fatorial);
                    break;
            }
        } else if (opcao === 6) {
            console.log("\nPrograma encerrado.");
        } else {
            console.log("Opção inválida. Escolha entre 1 e 6.");
        }

    } while (opcao !== 6);
}

