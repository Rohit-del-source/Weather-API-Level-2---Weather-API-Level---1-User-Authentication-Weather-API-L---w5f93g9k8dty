const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
  // City name (Type: String, Required: true)
  // Temperature in degrees (Type: Number, Required: true)
  // Zip code (Type: String, Required: true)
  // Humidity percentage (Type: Number, Required: true)
  // Weather description (Type: String, Required: true)
  cityName:{
    type: String,
    required: true,
    description: 'The name of the city for which the weather data is recorded.'
  },
  temperature :{
    type: Number,
    required: true,
    description:'The temperature at the location.'
  },
  zipCode :{
    type: String,
    required: true,
    description:'The zip code of the location.'
  },
  humidity:{
    type: Number,
    required: true,
    description:'The humidity at the location.'
  },
  weatherDescription:{
    type: String,
    required: true,
    description:'A description of the weather at the location.'
  }
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;