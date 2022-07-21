const buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', function(){  
    const km = document.querySelector('input[name="km"]');
    const eta = document.querySelector('#eta').value;
    const nome = document.querySelector('#nome').value;

    const prezzo = parseFloat(km.value) * 0.21;
    let percentualeSconto = 0;
    const passeggero = document.getElementById('passeggero');
    const offerta = document.getElementById('offerta');
    const carrozza = document.getElementById('carrozza');
    const costo = document.getElementById('costo');

    

    const biglietto = document.getElementById('row-biglietto');
    biglietto.style.display = 'flex'

    passeggero.innerHTML = nome;
    carrozza.innerHTML = Math.round(Math.random() * 10);

   if (eta < 18){
        let percentualeSconto = 0.2;
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        costo.innerHTML = prezzoScontato + '&euro;';
        offerta.innerHTML = 'Biglietto Ridotto';
    }
    else if (eta >= 65){
        let percentualeSconto = 0.4;
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        costo.innerHTML = prezzoScontato + '&euro;';
        offerta.innerHTML = 'Biglietto Over65';
    }
    else{
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        costo.innerHTML = prezzo + '&euro;';
        offerta.innerHTML = 'Biglietto Standard';
        
    }
} )
