
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un n° del 1 al 10:';
*/

let numeroSecreto= 0;
let intentos=0;
let listaNumerosSorteados =  [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');            
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value='';
     
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor( Math.random()*numeroMaximo+1);
    console.log(`N° generado ${numeroGenerado}`);
    console.log(`lista: ${listaNumerosSorteados}`);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los números posibles.')

    }else {
        //Si el n° generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;   

        }
    
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un n° del 1 al ${numeroMaximo}:`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;

}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números    
    //Generar el núemro aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
















/*
//Desafíos propuestos
function indiceMasaCorporal(altura,peso){
   return  resultado = peso/(altura**2);
}

let miIMC = indiceMasaCorporal(1.85,80)
console.log(`El IMC de la persona es de ${miIMC}`);

//2

function calculofactorial (num){
    var resultado = 1;
    for (let i = 1; i <= num; i++) {
         
        resultado=resultado*i
        
        
    }
    return resultado;
}
 let miFactorial=calculofactorial(3);
 console.log(miFactorial);

 //3
 function valorEnReales(dolares){
    return dolares*4.8
 }
 let cotizacion=valorEnReales(100);
 console.log(`El valor en Reales de los dolares ingresados es ${cotizacion} Reales.`)

 //4
 function areaPerimetro(alto,ancho){
    var area=alto*ancho;
    var perimetro=alto*2+ancho*2;
    console.log(`El área es ${area} y el perímetro es de ${perimetro}.`);
 }
 let altura=10;
 let ancho=20;
areaPerimetro(alto,ancho);

//5
function areaCircular(radio){
    const pi = 3.14;
    var area= pi*radio**2;
    var perimetro = 2*  pi*radio;
    console.log(`Área del círculo de radio: ${radio} es: ${area}. `);
    console.log(`Perímetro del círculo de radio: ${radio} es: ${perimetro}. `);

}
let radio= 15.3;
areaCircular(radio);

//6
function tablaDeMultiplicar ( num){
    for (let i = 0; i < 11; i++) {
        var resultado= i*num;
        console.log(`${num} x ${i}= ${resultado}`);
        
    }
}
numero=7;
tablaDeMultiplicar(numero);



//Desafío 4
let listaGenerica = [];
//2
let  lenguajesDeProgramacion = ['JavaScript','C', 'C++','Kotlin','Python'];
//3
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
//4
function muestraLista(){  
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {         
        console.log(lenguajesDeProgramacion[i]);
    }    
}
muestraLista();
//5
function muestraLenguajesInverso(){
    for (let i = lenguajesDeProgramacion.length; i >= 0 ; i--) {
        console.log(lenguajesDeProgramacion[i]);
        
    }
}
muestraLenguajesInverso();
//6

function calculoPromedio(listaDeNumeros){
    let suma=0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];        
    }
    return suma/listaDeNumeros.length;
}
let num = [4,8,9,10,10];
let promedio= calculoPromedio(num);
console.log(promedio);

//7
function encontrarMayorMenor(listaDeNumerosMayyMen){
    let menor=listaDeNumerosMayyMen[0];
    let mayor=listaDeNumerosMayyMen [0];

    for (let i = 1; i < listaDeNumerosMayyMen.length; i++) {
        if(listaDeNumerosMayyMen[i]< menor){
            menor=listaDeNumerosMayyMen[i];
        }
        if(listaDeNumerosMayyMen[i]> mayor){
            mayor=listaDeNumerosMayyMen[i];
        }            
    }
    console.log(`El mayor de la lista es ${mayor}`);
    console.log(`El menor de la lista es ${menor}`);
}

let listaDeNumeros = [25,56,100,252,-9,0,54];
encontrarMayorMenor(listaDeNumeros);

//8
function sumadorDeLista(listaDeNumeros){
    let suma=0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];        
    }
    return suma;
}
let lista= [1,2,3];
let resultado = sumadorDeLista(lista);
console.log(`La suma da: ${resultado}`);

//9
function encontrarIndiceElemento(lista, numero){
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] == numero){
            return i;
        }    
    }
    return -1

}
let miLista=[2,85,0,-1,-66,5555,9,2];
let miNumero=0;
let respuesta= encontrarIndiceElemento(miLista,miNumero);
console.log(`EL número ${miNumero} está en la posición ${respuesta}`)

//10
function sumadorDeListas(lista1,lista2){
    let listaSuma=[];
    if(lista1.length==lista2.length){
        for (let i = 0; i < lista2.length; i++) {
            listaSuma.push(lista1[i]+lista2[i]);        
        }
        return listaSuma;    
    }
    
}

let list1=[2,85,2];
let list2=[2,5,0];
let res= sumadorDeListas(list1,list2)
console.log(res);

//11
function calculoDeCuadrados(lista){
    let listaCuadrada=[];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrada.push(lista[i]**2);        
    }
    return listaCuadrada;
}
let list1=[2,5,0];
let res= calculoDeCuadrados(list1);
console.log(res);
*/