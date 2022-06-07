alert('Working')


document.querySelector('button').addEventListener('click', getCity)

function getCity(){
    let cityChoice = document.querySelector('input').value;

    fetch(`https://fl-cities-attraction-api.herokuapp.com/api/${cityChoice}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('.city').innerText = data.city;
        document.querySelector('.attraction').innerText = data.mainAttraction;
        document.querySelector('.location').innerText = data.location;
        document.querySelector('.pop').innerText = data.population
    })
}

