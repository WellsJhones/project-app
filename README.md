# Weather Search App

This Weather Search App allows users to search for weather information by entering a city name. The app displays the current temperature, location, humidity, and wind speed.

## Features

- Search for weather information by city name.
- Display current temperature, location, humidity, and wind speed.
- Dynamic background image based on temperature.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/weather-search-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-search-app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a city name in the search bar and press `Enter` or click the search icon to get the weather information.

## Code Overview

### `Weather.jsx`

- **`useEffect`**: Automatically searches for the weather in "Brasilia" when the component mounts.
- **`getBackgroundImage`**: Determines the background image based on the temperature.
- **`handleKeyPress`**: Triggers the search function when the Enter key is pressed.
- **`search`**: Function to fetch and display weather data based on the input city name.

Here's a README text for your weather search app:

---

# Weather Search App

This Weather Search App allows users to search for weather information by entering a city name. The app displays the current temperature, location, humidity, and wind speed.

## Features

- Search for weather information by city name.
- Display current temperature, location, humidity, and wind speed.
- Dynamic background image based on temperature.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/weather-search-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd weather-search-app
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a city name in the search bar and press [`Enter`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FWells%2FDocuments%2Fproject%2Fapp%2Fclima-app%2Fsrc%2Fcomponents%2FWeather.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A87%2C%22character%22%3A23%7D%7D%5D%2C%22dbd89e73-d5e3-41bd-8e4d-659eab337fe6%22%5D "Go to definition") or click the search icon to get the weather information.

## Code Overview

### [`Weather.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FWells%2FDocuments%2Fproject%2Fapp%2Fclima-app%2Fsrc%2Fcomponents%2FWeather.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22dbd89e73-d5e3-41bd-8e4d-659eab337fe6%22%5D "c:\Users\Wells\Documents\project\app\clima-app\src\components\Weather.jsx")

- **`useEffect`**: Automatically searches for the weather in "Brasilia" when the component mounts.
- **[`getBackgroundImage`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FWells%2FDocuments%2Fproject%2Fapp%2Fclima-app%2Fsrc%2Fcomponents%2FWeather.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A82%2C%22character%22%3A8%7D%7D%5D%2C%22dbd89e73-d5e3-41bd-8e4d-659eab337fe6%22%5D "Go to definition")**: Determines the background image based on the temperature.
- **[`handleKeyPress`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FWells%2FDocuments%2Fproject%2Fapp%2Fclima-app%2Fsrc%2Fcomponents%2FWeather.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A86%2C%22character%22%3A6%7D%7D%5D%2C%22dbd89e73-d5e3-41bd-8e4d-659eab337fe6%22%5D "Go to definition")**: Triggers the search function when the Enter key is pressed.
- **[`search`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FWells%2FDocuments%2Fproject%2Fapp%2Fclima-app%2Fsrc%2Fcomponents%2FWeather.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A79%2C%22character%22%3A4%7D%7D%5D%2C%22dbd89e73-d5e3-41bd-8e4d-659eab337fe6%22%5D "Go to definition")**: Function to fetch and display weather data based on the input city name.

### Example Code Snippet

```jsx
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    search(inputRef.current.value);
  }
};

return (
  <div className="weather" style={{ backgroundImage: `url(${weatherData ? getBackgroundImage(weatherData.temperature) : ''})` }}>
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder="Search..." onKeyPress={handleKeyPress} />
      <img src={searchImg} alt="" onClick={() => search(inputRef.current.value)} />
    </div>
    {weatherData ? (
      <>
        <img src={weatherData.icon} alt="" className='weather-icon' />
        <p className='temperature'>{weatherData.temperature}°C</p>
        <p className='location'>{weatherData.location}</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity} alt="" />
            <div>
              <p>{weatherData.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className='col'>
            <img src={wind} alt="" />
            <div>
              <p>{weatherData.wind}Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </>
    ) : null}
  </div>
);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---f