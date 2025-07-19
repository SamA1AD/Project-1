
 //come back to this shit
 const resizeBtn = document.querySelector('[data-resize-btn]');
    resizeBtn.addEventListener('click', function(e){
      e.preventDefault();
      document.body.classList.toggle('sb-expanded');
    })
//emoji tool for weather conditions
let emojiSelector = (input) => {
  let emoji = "";
  switch (input.toLowerCase()) {
    case "sunny":
      emoji = "☀️";
      break;
    case "broken clouds":
      emoji = "☁️";
      break;
    case "clear sky":
      emoji = "🌞";
      break;
    case "few clouds":
      emoji = "🌤️";
      break;
    case "scattered clouds":
      emoji = "⛅";
      break;
    case "heavy intense rain":
    case "shower rain":
    case "rain":
    case "light rain":
      emoji = "🌧️";
      break;
    case "thunderstorm":
      emoji = "🌩️";
      break;
    case "snow":
      emoji = "❄️";
      break;
    case "mist":
      emoji = "🌫️";
      break;
    default:
      emoji = "🌤️"; // default for unrecognized descriptions
  }
  return emoji; // 🔥 This is the key part you were missing
};






//out put for today weather card
    const todayWeatherIndex = () => {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=36.39&lon=-87.23&APPID=e3eb7f3b66489ac790efa64c615ef655&units=imperial")
        .then(response => response.json())
        .then(weather => {
          //html selectors
          const time = document.getElementById("today-time");
          const currentTemp = document.getElementById("today-current-temp");
          const sky = document.getElementById("today-sky");
          const emoji = document.getElementById("today-emoji");
          const min = document.getElementById("today-min");
          const max = document.getElementById("today-max");
          const humidity = document.getElementById("today-humidity");
          const windspeed = document.getElementById("today-windspeed");
          const now = new Date()
          const formattedDate = now.toLocaleString();
          //innerHTML assingment
            time.innerHTML = formattedDate;
            currentTemp.innerHTML = "Current Temperature: " + weather.main.temp + "°F";
            sky.innerHTML = weather.weather[0].description;
            min.innerHTML = "Min: " + weather.main.temp_min + "°F";
            max.innerHTML = "Max: " + weather.main.temp_max + "°F";
            humidity.innerHTML = "Humidity: " + weather.main.humidity + "%";
            windspeed.innerHTML = `Wind Speed: ${weather.wind.speed}MPH, Wind direction: ${weather.wind.deg}°, Gust: ${weather.wind.gust}MPH`
            emoji.innerHTML = emojiSelector(weather.weather[0].description)


        })
}
todayWeatherIndex()

  const forcastWeather = ()=> {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=36.39&lon=87.23&appid=e3eb7f3b66489ac790efa64c615ef655&units=imperial")
      .then(result => result.json())
      .then(weather => console.log(weather))

  }

  forcastWeather()


//   {
//   cod: '200',
//   message: 0,
//   cnt: 40,
//   list: [
//     {
//       dt: 1752894000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 8282,
//       pop: 0.27,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-19 03:00:00'
//     },
//     {
//       dt: 1752904800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.2,
//       rain: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-19 06:00:00'
//     },
//     {
//       dt: 1752915600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.34,
//       rain: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-19 09:00:00'
//     },
//     {
//       dt: 1752926400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.26,
//       rain: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-19 12:00:00'
//     },
//     {
//       dt: 1752937200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-19 15:00:00'
//     },
//     {
//       dt: 1752948000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-19 18:00:00'
//     },
//     {
//       dt: 1752958800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-19 21:00:00'
//     },
//     {
//       dt: 1752969600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 00:00:00'
//     },
//     {
//       dt: 1752980400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 03:00:00'
//     },
//     {
//       dt: 1752991200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 06:00:00'
//     },
//     {
//       dt: 1753002000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 09:00:00'
//     },
//     {
//       dt: 1753012800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 12:00:00'
//     },
//     {
//       dt: 1753023600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 15:00:00'
//     },
//     {
//       dt: 1753034400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 18:00:00'
//     },
//     {
//       dt: 1753045200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-20 21:00:00'
//     },
//     {
//       dt: 1753056000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 00:00:00'
//     },
//     {
//       dt: 1753066800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 03:00:00'
//     },
//     {
//       dt: 1753077600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 06:00:00'
//     },
//     {
//       dt: 1753088400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 09:00:00'
//     },
//     {
//       dt: 1753099200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 12:00:00'
//     },
//     {
//       dt: 1753110000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 15:00:00'
//     },
//     {
//       dt: 1753120800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 18:00:00'
//     },
//     {
//       dt: 1753131600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-21 21:00:00'
//     },
//     {
//       dt: 1753142400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.47,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 00:00:00'
//     },
//     {
//       dt: 1753153200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.4,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 03:00:00'
//     },
//     {
//       dt: 1753164000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 745,
//       pop: 1,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 06:00:00'
//     },
//     {
//       dt: 1753174800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       pop: 1,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 09:00:00'
//     },
//     {
//       dt: 1753185600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       pop: 1,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 12:00:00'
//     },
//     {
//       dt: 1753196400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       pop: 1,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 15:00:00'
//     },
//     {
//       dt: 1753207200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 1,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 18:00:00'
//     },
//     {
//       dt: 1753218000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 4965,
//       pop: 0.51,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-22 21:00:00'
//     },
//     {
//       dt: 1753228800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 4409,
//       pop: 0.62,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-23 00:00:00'
//     },
//     {
//       dt: 1753239600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.28,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-23 03:00:00'
//     },
//     {
//       dt: 1753250400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-23 06:00:00'
//     },
//     {
//       dt: 1753261200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.2,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-23 09:00:00'
//     },
//     {
//       dt: 1753272000,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.3,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-23 12:00:00'
//     },
//     {
//       dt: 1753282800,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.37,
//       snow: [Object],
//       sys: [Object],
//       dt_txt: '2025-07-23 15:00:00'
//     },
//     {
//       dt: 1753293600,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0.05,
//       sys: [Object],
//       dt_txt: '2025-07-23 18:00:00'
//     },
//     {
//       dt: 1753304400,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-23 21:00:00'
//     },
//     {
//       dt: 1753315200,
//       main: [Object],
//       weather: [Array],
//       clouds: [Object],
//       wind: [Object],
//       visibility: 10000,
//       pop: 0,
//       sys: [Object],
//       dt_txt: '2025-07-24 00:00:00'
//     }
//   ],
//   city: {
//     id: 0,
//     name: '',
//     coord: { lat: 36.39, lon: 87.23 },
//     country: '',
//     population: 0,
//     timezone: 28800,
//     sunrise: 1752880039,
//     sunset: 1752931621
//   }
// }