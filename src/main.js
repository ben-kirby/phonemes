import { Definition } from "./definition";

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
        Definition.getWordInfo(selectedWord)
      }


    });
  };
});
