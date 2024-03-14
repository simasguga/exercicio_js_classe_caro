class Carro {
    marca;
    cor;
    gastoMedio;
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = 1 / gastoMedio;
    }
    calcularViagem(qtdKm, valorCombustivel) {
        const resultadoFinal = qtdKm * this.gastoMedio * valorCombustivel;
        return resultadoFinal.toFixed(2);
    }
}


const carro1 = new Carro("Fusca", "Azul", 12);
const carro2 = new Carro("Peugeot", "Preto", 18);
console.log(`O carro de marca ${carro1.marca} gasta R$${carro1.calcularViagem(70, 5)} reais em uma viagem.`);
console.log(`O carro de marca ${carro2.marca} gasta R$${carro2.calcularViagem(70, 5)} reais em uma viagem.`);
