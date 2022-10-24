import "bootstrap";
import "./style.css";

window.onload = function() {
  let con1 = ["ready", "super", "great", "giga"];
  let con2 = ["cold", "happy", "honest9", "very"];
  let con3 = [".com", ".net", ".edu", ".org", ".io"];

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
