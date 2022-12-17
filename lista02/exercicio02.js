function eleitores() {

    var totaleleitores = parseInt(prompt("Informe o total de eleitores do município: "));
    var votosbrancos = parseInt(prompt("Informe o total de votos brancos: "));
    var votosnulos = parseInt(prompt("Informe o total de votos nulos: "));
    var votosvalidos = parseInt(prompt("Informe o total de votos válidos: "));

    var percvotosbrancos = votosbrancos / totaleleitores * 100;
    var percvotosnulos = votosnulos / totaleleitores * 100;
    var percvotosvalidos = votosvalidos / totaleleitores * 100;

    prompt("O número total de eleitores é igual a: " + totaleleitores);
    prompt("O percentual de votos brancos em relação ao número total de eleitores é igual a: " + percvotosbrancos + "%");
    prompt("O percentual de votos brancos em relação ao número total de eleitores é igual a: " + percvotosnulos + "%");
    prompt("O percentual de votos brancos em relação ao número total de eleitores é igual a: " + percvotosvalidos + "%");
};
