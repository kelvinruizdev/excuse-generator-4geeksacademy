/* eslint-disable */
import "bootstrap";
import "./style.css";

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
  let excuse = "";
  //Genera excusa
  excuse =  who[Math.floor(Math.random() * who.length)] + " ";
  excuse += action[Math.floor(Math.random() * action.length)] + " ";
  excuse += what[Math.floor(Math.random() * what.length)] + " ";
  excuse += when[Math.floor(Math.random() * when.length)] + ".";

  return excuse;
}

window.onload = function() {
  //Muestra la excusa generada en el html
  var objetivo = document.getElementById("excuse");
  objetivo.innerHTML = excuseGenerator();
};
