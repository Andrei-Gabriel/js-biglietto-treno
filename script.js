let totKm = prompt("Inserisci Km");
let età = parseInt(prompt("Inserisci età"));

/*  Dichiaro una variabile (let = prezzo),
    calcolo il prezzo (totKm * 0.21),
    arrotondo fino a 2 cifre decimali ((totKm * 0.21).toFixed(2)),
    dato che .toFixed(n) trasforma in stringa
        uso parseFloat(n) per trasformarlo in float*/
let prezzo = parseFloat((totKm * 0.21).toFixed(2));


if (età < 18) {
    console.log("totKm =",totKm + "\n" +
                "età =",età + "\n"+
                "prezzo =",prezzo + "\n" +
                "sconto =",(prezzo * 0.2).toFixed(2) + "\n" +
                "prezzo scontato =",(prezzo - prezzo * 0.2).toFixed(2)
    );
} 
else if (età > 65) {    
    console.log("totKm =",totKm + "\n" +
                "età =",età + "\n"+
                "prezzo =",prezzo + "\n" +
                "sconto =",(prezzo * 0.4).toFixed(2) + "\n" +
                "prezzo scontato =",(prezzo - prezzo * 0.4).toFixed()
    );   
}
else {
    console.log("totKm =",totKm + "\n" +
                "età =",età + "\n"+
                "prezzo =",prezzo + "\n"
    );
}
