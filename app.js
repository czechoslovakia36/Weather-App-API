window.addEventListener("load", () => {
  let long;
  let lat;

  //   DOM VARIABLES
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );

  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      //   console.log(position)
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=be4ca6698a3b75b9b5942ac5922834e6`;
      console.log(api);
      fetch(api)
        // In place of data/response. argument we can use anything
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const description = data.weather[0].description;
          //   description
          const { temp } = data.main;
          //   temp
          const { name } = data;
          //   location
          const locationName = data.name;
          // icon
         

          // SET DOM ELEMENTS FROM THE API
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
          locationTimezone.textContent = locationName;
         
        });
    });
  }
   function setIcons= 
});
