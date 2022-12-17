function custocarro(){

    var custofabrica= parseInt(prompt("Informe o custo de fábrica do seu carro: "));
    var percdistribuidor= 28/100*custofabrica
    var percimpostos= 45/100*custofabrica
    var total=custofabrica+percdistribuidor+percimpostos

    alert("O custo total de seu carro é igual a: "+total);
}