const API_KEY = "e59d172c3fe92fa44e94f570289998f5";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      const weatherBox = document.querySelector("#weather span:first-child")
      const cityBox = document.querySelector("#weather span:last-child")
      cityBox.innerText = data.name ;
      weatherBox.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
    });

}

function onGeoErr(){ 
  alert("Can't find you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);

