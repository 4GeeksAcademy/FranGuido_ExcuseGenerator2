/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#theexcuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = [
    "The police",
    "My neighbor",
    "The Zoo's Okapi",
    "My curling coach"
  ];
  let action = ["destroyed", "burnt down", "crushed", "broke"];
  let what = ["my excuse generator", "the project", "the car", "my house"];
  let when = [
    "before class.",
    "just now.",
    "this morning.",
    "during my lunch."
  ];

  //index selector//
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
