function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let apiKey = "ef5e3f47e22310b3ote67924e5d5ea4b";

let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(url).then(showUser);
