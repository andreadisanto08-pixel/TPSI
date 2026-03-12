function login(){
    let utente = document.getElementById("utente").value;
    let password = document.getElementById("password").value;
    if(utente === "studente" && password === "1234")
    {
        alert("Login corretto!");
    }
    else
    {
        alert("Errore! Riprova");
    }
}
function calcolatrice(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let risultato;

    switch(operazione.value)
    {
        case "+": risultato = numero1 + numero2; break;
        case "-": risultato = numero1 + numero2; break; 
    }
    document.getElementById("risultato").value = risultato;
}
function consegna(){
    let spunta = document.getElementById("spunta").checked;
    if(spunta)
    {
         let conferma = confirm("Sei sicuro?");
         if(conferma)
         {
            alert("compito consegnato");
         }
            
    }
    else
    {
        alert("Sei sicuro di aver spuntato");
    }


}





