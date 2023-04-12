/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excuse = "";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function excuseGenerator() {
  excuse = who[Math.floor(Math.random() * who.length)] + " ";
  console.log(Math.floor(Math.random() * who.length));
  excuse += action[Math.floor(Math.random() * action.length)] + " ";

  excuse += what[Math.floor(Math.random() * what.length)] + " ";

  excuse += when[Math.floor(Math.random() * when.length)] + ".";

  //Se usa la funcion array.length para generar
  //un numero aleatorio que comprenda el numero
  //de elementos del array haciendolo dinamico,
  //esto en caso modificar la cantidad de elementos
  //de algun array.
  return excuse;
}

window.onload = function() {
  //write your code here
  //console.log(excuseGenerator());
  //Muestra la excusa generada en el html
  var objetivo = document.getElementById("excuse");
  objetivo.innerHTML = excuseGenerator();
};
