const express = require('express')
const app = express()
//const cors = require('cors')
const PORT = 8000

//app.use(cors())

const cities = {
    'orlando': {
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 2,038,000',

    },
    'miami':{
        'city': 'Miami',
        'mainAttraction': 'Little Havana',
        'location': '1600 SW 8th St, Miami, FL 33135', 
        'image': '??',
        'Population': 'Early 2022: 6,215,000',
    },
    'tampa':{
        'city': 'Tampa',
        'mainAttraction': 'Ybor City',
        'location': '1600 E. 8th Avenue, Tampa, FL 33605', 
        'image': '??',
        'Population': 'Early 2022: 2,945,000',
    },
    'fort lauderdale':{
        'city': 'Fort Lauderdale',
        'mainAttraction': 'Fort Lauderdale Beach',
        'location': '1100 Seabreeze Blvd, Fort Lauderdale, FL 33316', 
        'image': '??',
        'Population': 'Early 2022: 186,000',
    },
    'st. augustine':{
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 292,000',
    },
    'sarasota':{
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 292,000',
    },
    'st. petersburg':{
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 292,000',
    },
    'pensacola':{
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 292,000',
    },
    'jacksonville':{
        'city': 'Orlando',
        'mainAttraction': 'Walt Disney World & Universal Studios',
        'location': 'Walt Disney World, Orlando, FL', 
        'image': '??',
        'Population': 'Early 2022: 292,000',
    },
    'tallahassee':{
        'city': 'Tallahassee',
        'mainAttraction': 'Florida State University & Capitol building',
        'location': 'FSU: 288 Champions Way, Tallahassee, FL 32306, Capitol: 400 S Montroe St, Tallahassee, FL 32399', 
        'image': '??',
        'Population': 'Early 2022: 199,000',
    },
    'unknown':{
        'city': 'Sorry, the city you entered is not on the list',
        'mainAttraction': 'Unsure about the main attraction for this area',
        'location': 'No idea where this is', 
        'image': '??',
        'Population': 'I would guess between 1 and 50,000,000',
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:city', (request, response) => {
    const floridaCity = request.params.city.toLowerCase()
    if(cities[floridaCity]){
        response.json(cities[floridaCity])
    }else{
        response.json(cities['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})