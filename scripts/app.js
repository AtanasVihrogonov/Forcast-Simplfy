/*
* DOM manipulation & Event handeling 
*/
const cityForm = document.querySelector('form');

const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const wearher = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets,
    wearher: wearher
  };

};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the UI with new city
  updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));

});
