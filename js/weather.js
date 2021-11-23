const API_KEY = "62c108f891a56d99a8d998ac86056444";

function onGeoSuccess(position){
  const {coords: {latitude, longitude}} = position;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

    });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

const currentPosition = navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);