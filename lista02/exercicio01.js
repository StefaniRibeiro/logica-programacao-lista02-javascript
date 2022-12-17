function idade(){
    var ano=parseInt(prompt("Digite sua idade: "));
    var mes=parseInt(prompt("Quantos meses se passaram desde o seu último aniversário: "));  
    var dia=parseInt(prompt("Quantos dias se passaram desde o seu último aniversário: "))

    var total=(ano*365)+(mes*30)+dia
    prompt("O número de dias que você viveu é: "+total);
}