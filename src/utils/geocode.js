const request = require('postman-request')

const geocode = function(address, callback){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiYXNoaXNoZGFuZGdlIiwiYSI6ImNra3A4c2FsdzBhdjEydm56MW9mdnNsc28ifQ.V1DFS30KCNUUJ32BYlSnhQ&limit=1`

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to Location Service!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, trying using some other search', undefined)
        }else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode