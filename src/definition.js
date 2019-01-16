class Definition {
  // https://api.datamuse.com/words?sp=black&md=r+d&ipa=1&max=1
  static getWordInfo(word){
    return fetch(`https://api.datamuse.com/words?sp=${word}&md=r+d&ipa=1&max=1`).then(function(response){
      return response.json();
    });
  }
}

export { Definition };
