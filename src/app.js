/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let con1 = ["lava", "world", "fancy", "twist"];
  let con2 = ["con", "gate", "fit", "push"];
  let con3 = [".com", ".net", ".edu", ".org"];

  let textoh1 = document.querySelector("#domain");

  let placeholder = "";

  for (let i = 0; i < con1.length; i++) {
    for (let j = 0; j < con3.length; j++) {
      console.log(con1[i] + " " + con3[j]);
      placeholder +=
        "<p>" +
        con1[i] +
        con2[i] +
        con3[j] +
        "</p>" +
        "<p>" +
        con2[i] +
        con1[i] +
        con3[j] +
        "</p>";
    }
  }
  textoh1.innerHTML = placeholder;
};
