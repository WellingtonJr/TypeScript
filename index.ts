console.log('typescript');

function soma(a: number, b: number) {
    return a + b;
}

// types
// interfaces

// interface IAnimal{
// nome: string;
// tipo: 'terrestre' | 'aquático';
// executarRugido(alturaEmDecibeis: number): void;
// }

type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    // executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

// const animal : IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// console.log( animal.executarRugido(12));

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    domestico: false
}


interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: ' Cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}

//////////////////////////////////////////////

const input = document.getElementById('input-id') as HTMLInputElement;
console.log(input.value);

input.addEventListener('input', (event) => {
    // console.log(event.currentTarget);
    // console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);

})

//generic types
function adicionaApendiceALista<T>(arr: T[], valor: T) {
    return arr.map(item => valor)
}

// adicionaApendiceALista([1,2,3,4],1);

console.log(adicionaApendiceALista([1, 'B', 'C', 4], "d"));

//criando variaveis com prop. readonly e private

interface Cachorro {
    readonly nome: string;
    readonly idade: number;
    readonly parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?:  Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }

}

const cao = new MeuCachorro('Lua',2);

cao.idade = 9;

console.log(cao);

// importar bibliotecas 

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
})

$('body').novaFuncao();