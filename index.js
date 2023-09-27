const btnEL = document.getElementById('btn');
const jokeEL = document.getElementById('joke');

const apiKey = 'BrfcO27ks7zKD0hxjnFMwg==J3GyRFv8QUfBho9B';

const options = {
    method: 'GET',
    headers: { 
        'X-Api-Key': apiKey,
    },
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke() {
    try {
        jokeEL.innerText = 'Updating...';
        btnEL.disable = true;
        btnEL.innerText = "Loading...";
        const response = await fetch(apiURL, options)
        const data = await response.json()
        jokeEL.innerText = data[0].joke;
        btnEL.disable = false;
        btnEL.innerText = "Tell me a joke";        
    } catch (error) {
        btnEL.disable = false;
        btnEL.innerText = "Tell me a joke";        
        jokeEL.innerText = 'Check your internet connection, & try again';
    }
}
btnEL.addEventListener("click", getJoke)