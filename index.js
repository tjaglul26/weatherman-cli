const fetch = require('node-fetch');
const figlet = require('figlet');
const prompts = require('prompts');

figlet('weatherman', function(err, data) {
  console.log(data);
});

api = {
  key: 'a3085d499c59b5a7e58a743e68b90bdc',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const weather = (location) => {
   fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(JSON.stringify())
    .then(text => 
      console.log(`\n${text.name}  | ${text.sys.country} \nTemperature: ${text.main.temp}°, Feels like: ${text.main.feels_like}° \nHumidity: ${text.main.humidity}%\nCondition: ${text.weather[0].main}, ${text.weather[0].description}`)
    )
};

(async () => {
  const questions = [
  {
    type: 'text',
    name: 'location',
    message: 'Enter city name:'
  }
];

const onSubmit = (prompt, location) => weather(location);
const response = await prompts(questions, { onSubmit });
})();
