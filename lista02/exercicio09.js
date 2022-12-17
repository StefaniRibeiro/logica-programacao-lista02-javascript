function valorprestacao() {

    let valorprestacao = parseInt(prompt("Informe o valor da prestação: "));
   
    let tempo = parseInt(prompt("Informe o tempo que a fatura está atrasada: "));

    let taxa = parseInt(prompt("Informe a taxa de atraso: "));
    
    let novaprestacao = (valorprestacao + (valorprestacao * taxa / 100) * tempo);

prompt("O novo valor da prestação é igual a: "+novaprestacao);

}