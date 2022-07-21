const buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', function(){  
    const km = document.querySelector('input[name="km"]');
    const eta = document.querySelector('#eta').value;

    const prezzo = parseFloat(km.value) * 0.21;
    let percentualeSconto = 0;
    const passeggero = document.getElementById('passeggero');
    const offerta = document.getElementById('offerta');
    const carrozza = document.getElementById('carrozza');
    const costo = document.getElementById('costo');

    const biglietto = document.getElementById('row-biglietto');
    biglietto.style.display = 'flex'

    
    
    if (eta <= 0 || eta >= 130){
        alert('ATTENZIONE! Il valore inserito per l`età non è valido.');
        // biglietto.innerHTML = 'Nessuno biglietto generato.';
    }
    else if (eta < 18){
        let percentualeSconto = 0.2;
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        // biglietto.innerHTML = 'Il tuo biglietto costa: ' + prezzoScontato + '&euro;';

    }
    else if (eta >= 65){
        let percentualeSconto = 0.4;
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        // biglietto.innerHTML = 'Il tuo biglietto costa: ' + prezzoScontato + '&euro;';
    }
    else{
        const sconto = prezzo * percentualeSconto;
        let prezzoScontato = prezzo - sconto;
        prezzoScontato = prezzoScontato.toFixed(2);
        // biglietto.innerHTML = 'Il tuo biglietto costa: ' + prezzo + '&euro;';
        
    }
} )
