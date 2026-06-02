const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {

  console.log(`Server listening on port ${PORT}`);
});

console.log(weatherData);

app.get('/weather', (request, response) => {
  const { lat, lon, searchQuery } = request.query;
  city.city_name.toLowerCase() === 
  searchQuery.toLowerCase()

});

class Forecast {
  constructor(dayObj) {
    this.date = dayObj.valid_date;

    this.description =
      `Low of ${dayObj.low_temp},
      high of ${dayObj.max_temp}
      with ${dayObj.weather.description}`;
  }
}







app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
