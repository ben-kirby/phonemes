import { Definition } from "./definition";
import "./styles.css"

document.addEventListener("DOMContentLoaded", function() {
  let phrase = document.getElementById("phrase");
  let phraseForm = document.getElementById("phrase-form");
  let phraseOutput = document.getElementById("phrase-output");

  phraseForm.onsubmit = function(event) {
    event.preventDefault();
    let words = phrase.value.split(" ");
    let output = "";
    words.forEach((word) => {
      output += `<span>${word}</span> `;
    });
    phraseOutput.innerHTML = output;

    phraseOutput.addEventListener('click', function(event){
      if (event.target.tagName === "SPAN") {
        let selectedWord = event.target.textContent;
        let wordPromise = Definition.getWordInfo(selectedWord)
        wordPromise.then(function(jsonData){
          let data = jsonData[0];
          console.log(data);
        })
      }
    });
  };
});
