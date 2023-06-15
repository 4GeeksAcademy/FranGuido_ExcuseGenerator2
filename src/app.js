/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//load new excuse when page reloads//
window.onload = function() {
  //write your code here
  //selecting html file for showing the excuse//
  document.querySelector("#theexcuse").innerHTML = generateExcuse();
};

//Excuse components//
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

  //index for selecting excuse components//
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  //concatenating and returning the excuse//
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
