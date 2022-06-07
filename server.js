const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cities = {
    'orlando': {
        'city': 'City: Orlando',
        'mainAttraction': 'Main Attraction(s): Walt Disney World & Universal Studios',
        'location': 'Location: Walt Disney World, Orlando, FL, and uh... Universal Studios, Orlando, FL', 
        'image': '??',
        'population': 'Population: Early 2022: 2,038,000'

    },
    'miami':{
        'city': 'City: Miami',
        'mainAttraction': 'Main Attraction: Little Havana',
        'location': 'Location: 1600 SW 8th St, Miami, FL 33135', 
        'image': '??',
        'population': 'Population: Early 2022: 6,215,000'
    },
    'tampa':{
        'city': 'City: Tampa',
        'mainAttraction': 'Main Attraction: Ybor City',
        'location': 'Location: 1600 E. 8th Avenue, Tampa, FL 33605', 
        'image': '??',
        'population': 'Population: Early 2022: 2,945,000'
    },
    'fort lauderdale':{
        'city': 'City: Fort Lauderdale',
        'mainAttraction': 'Main Attraction: Fort Lauderdale Beach',
        'location': 'Location: 1100 Seabreeze Blvd, Fort Lauderdale, FL 33316', 
        'image': '??',
        'population': 'Population: Early 2022: 186,000'
    },
    'st. augustine':{
        'city': 'City: St. Augustine',
        'mainAttraction': 'Main Attraction: Castillo de San Marcos',
        'location': 'Location: 1 S Castillo Dr, St. Augustine, FL 32084', 
        'image': '??',
        'population': 'Population: Early 2022: 18,000'
    },
    'sarasota':{
        'city': 'City: Sarasota',
        'mainAttraction': 'Main Attraction: The Ringling',
        'location': 'Location: 5401 Bay Shore Rd, Sarasota, FL 34243', 
        'image': '??',
        'population': 'Population: Early 2022: 750,000'
    },
    'st. petersburg':{
        'city': 'City: St. Petersburg',
        'mainAttraction': 'Main Attraction: St. Pete Pier',
        'location': 'Location: 600 2nd Ave NE, St. Petersburg, FL 33701', 
        'image': '??',
        'population': 'Population: Early 2022: 264,000'
    },
    'pensacola':{
        'city': 'City: Pensacola',
        'mainAttraction': 'Main Attraction: National Museum of Naval Aviation',
        'location': 'Location: 1750 Radford Blvd, Pensacola, FL 32508', 
        'image': '??',
        'population': 'Population: Early 2022: 357,000'
    },
    'jacksonville':{
        'city': 'City: Jacksonville',
        'mainAttraction': 'Main Attraction: JACKSONVILLE JAGUARS! Ok, ok... they have had some rough patches, but don\'t count them out just yet. It is still fun to go to a game!',
        'location': 'Location: 1 TIAA Bank Field Dr, Jacksonville, FL 32202', 
        'image': '??',
        'population': 'Population: Early 2022: 1,314,000'
    },
    'tallahassee':{
        'city': 'City: Tallahassee',
        'mainAttraction': 'Main Attraction: Florida State University & Capitol building',
        'location': 'Location(s): FSU: 288 Champions Way, Tallahassee, FL 32306, Capitol: 400 S Montroe St, Tallahassee, FL 32399', 
        'image': '??',
        'population': 'Population: Early 2022: 199,000'
    },
    'unknown':{
        'city': 'City: Sorry, the city you entered is not on the list',
        'mainAttraction': 'Main Attraction: Unsure about the main attraction for this area',
        'location': 'Location: No idea where this is', 
        'image': '??',
        'population': 'Population: I would guess between 1 and 50,000,000'
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