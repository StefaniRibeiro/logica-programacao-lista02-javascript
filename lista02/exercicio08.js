function resultado() {
    let tempo = parseInt(prompt("Informe o tempo gasto na viagem: "));
    let velocidademedia = parseInt(prompt("Informe a velocidade média durante a viagem: "));
    let distancia = tempo * velocidademedia
    let litrosusados = distancia / 12


    prompt("A velocidade média da viagem foi igual a: " + velocidademedia)
    prompt("O tempo gasto na viagem foi igual a: " + tempo)
    prompt("A distância percorrida foi igual a: " + distancia)
    prompt("A quantidade de litros de gasolina usados na viagem foi igual a: " + litrosusados)

}