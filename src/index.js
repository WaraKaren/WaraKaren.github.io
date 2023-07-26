// document es el permiso para acceder a HTML
/*querySelector puede acceder a un elemento por su
<etiqueta> .class #id pero solo tomara encunta a los primeros*/
/*en este caso para que querySelector seleccione el que queremos y que no
seleccione el primero que se le aparesca es que se utiliza los corchetes[]
especificando que se busca un textare que tenga name=user-input*/
const userInput = document.querySelector('textarea');
//con addEventListener se asigana una acion luego de obtner una respuesta
userInput.addEventListener('keyup', () => {
const palabras= //poner funcion y poner para cada una de las li
const
}
console.log(userInput);

//varibles declaradas de las li
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');
//para acceder a un elemto por id se utiliza getElementById
//reset-button es el id del boton que se utilizo en html
const VarParaLimpiar = document.getElementById("reset-button");

//
