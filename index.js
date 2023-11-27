const kanye = "https://api.kanye.rest/";

const p = document.querySelector('p');

async function getKanyeQuote() {
    try {
        const response = await fetch(kanye);
        const phrase = await response.json();
    
        p.textContent = phrase.quote;
        
    } catch (error) {
        p.textContent = "There was a problem with the fetch operation"
    }
}

getKanyeQuote();

document.getElementById("btn").addEventListener('click', () => {
    getKanyeQuote();
})