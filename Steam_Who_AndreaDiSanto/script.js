const albero = {
  domanda: "Il personaggio è una donna?",
  si: {
    domanda: "Ha lavorato principalmente nella scienza?",
    si: { personaggio: "Marie Curie" },
    no: { personaggio: "Ada Lovelace" }
  },
  no: {
    domanda: "È vissuto prima del 1900?",
    si: { personaggio: "Leonardo da Vinci" },
    no: {
      domanda: "È famoso per l'elettricità?",
      si: { personaggio: "Nikola Tesla" },
      no: { personaggio: "Albert Einstein" }
    }
  }
};
let nodoCorrente = albero;
function mostraDomanda() {
  document.getElementById("domanda").innerText = nodoCorrente.domanda;
}
function risposta(valore) {
  nodoCorrente = valore ? nodoCorrente.si : nodoCorrente.no;

  if (nodoCorrente.personaggio) {
    document.getElementById("domanda").innerText = "";
    document.getElementById("output").innerText =
      "Il personaggio è: " + nodoCorrente.personaggio;
  } else {
    mostraDomanda();
  }
}
mostraDomanda();
