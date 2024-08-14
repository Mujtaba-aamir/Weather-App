const APIKey = "06b305ffd4283f0678bd88c974a08f7f";
const APIURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchBar = document.querySelector(".srchbar");
const SearchButton = document.querySelector("#searchbutton");
const Temperature = document.querySelector(".temp");
const City = document.querySelector(".city");
const Humidity = document.querySelector(".text1");
const Wind = document.querySelector(".text2");
const View = document.querySelector("#WeatherView");

async function UpdateWeather(CityName) {
  const Response = await fetch(APIURL + CityName + `&appid=${APIKey}`);
  if(Response.status==404)
  {
    document.querySelector('.invalid').style.display="block";
    document.querySelector('.block').style.display="none";

  }
  else{
  const Data = await Response.json();
  console.log(Data);
  Temperature.innerText = Math.round(Data.main.temp) + "°C";
  City.innerText = Data.name;
  Humidity.innerText = Data.main.humidity + "%";
  Wind.innerText = Data.wind.speed + " km/h";

  if (Data.weather[0].main == "Clouds") {
    View.src = "clouds.png";
  }
  else if (Data.weather[0].main == "Clear") {
    View.src = "clear.png";
  }
  else if (Data.weather[0].main == "Drizzle") {
    View.src = "drizzle.png";
  }
  else if (Data.weather[0].main == "Mist") {
    View.src = "mist.png";
  }
  else if (Data.weather[0].main == "Snow") {
    View.src = "snow.png";
  }
  else if (Data.weather[0].main == "Rain") {
    View.src = "rain.png";
  }
  document.querySelector('.invalid').style.display="none";

  document.querySelector('.block').style.display="block";

}}
SearchButton.addEventListener("click", () => {
  UpdateWeather(SearchBar.value);
});
