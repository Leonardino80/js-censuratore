// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

// - Il software riceve in input un lungo testo e una serie di parole da censurare.
var text = prompt ('inserisci il testo');
var words;
var input_phase = true;
var censored_words = [];

function check_stored_words (array, given_word){
var got_word = false;
  for (var i = 0; i < array.length; i++) {
    if(array[i] === given_word) {
      alert('word already inside')
      var got_word = true;
    }
  }
  return got_word;
}



console.log(really_got_word);

while (input_phase ) {
  words = prompt ('inserisci parola vietata.');
  check_stored_words (censored_words , words );
  if (really_got_word = false) {
      censored_words.push(words);
  }
  input_phase = confirm ('vuoi inserire un altra parola?');

}

console.log(censored_words);
var really_got_word = check_stored_words (censored_words , words );
console.log(really_got_word);

// - Restituisce il testo con xxx al posto delle parole censurate.


// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
