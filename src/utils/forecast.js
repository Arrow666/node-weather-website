const request = require('postman-request')

const forecast = function(longitude, latitude, callback){
    const url = `http://api.weatherstack.com/current?access_key=7bf7f9bb0f776dfb8a01ee83b20ee824&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to Weather Service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast