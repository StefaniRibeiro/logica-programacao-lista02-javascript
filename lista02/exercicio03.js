function salarioajustado() {
    var salario = parseInt(prompt("Informe seu salário: "));
    var reajuste = parseInt(prompt("Informe quanto deseja de reajuste (em porcentagem): "));

    var percreajuste = reajuste / 100 * salario
    var salarioajustado = salario + percreajuste

    prompt("O seu novo salário é igual a: " + salarioajustado);
}