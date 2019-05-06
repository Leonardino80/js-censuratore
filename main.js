// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

// - Il software riceve in input un lungo testo e una serie di parole da censurare.
var text = prompt ('inserisci il testo').split(/ /gi);
var words;
var input_phase = true;
var censored_words = [];

while (input_phase ) {
  words = prompt ('inserisci parola vietata.');
  censored_words.push(words);
  input_phase = confirm ('vuoi inserire un altra parola?');
}

function censored (testo, censura) {
  cens_index = 0;
  for (var i = 0; i < testo.length; i++) {
    if (censura.includes(testo[i]) == true) {
      array1[i] = "xxx";
      cens_index++;
    }
  }
}

var risultato = censored ( text , censored_words );
text.join('');
console.log(cens_index);
// - Restituisce il testo con xxx al posto delle parole censurate.


// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
