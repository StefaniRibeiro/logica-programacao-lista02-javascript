function resultado(){
    var raio=parseInt(prompt("Informe o raio da lata: "));
    var altura=parseInt(prompt("Informe a altura da lata: "))
    var volume=Math.PI*Math.pow(raio,2)*altura  
    
    
    prompt("O volume da lata é igual a: "+volume);
    }