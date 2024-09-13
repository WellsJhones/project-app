# Weather Search App
![Untitled video - Made with Clipchamp](https://github.com/user-attachments/assets/e636ce14-64e7-4099-b1d0-9f4d838cdc43)


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
    npm run dev
    ```
2.Open your browser and navigate to `http://localhost:3000` `http://localhost:5173`

3. Enter a city name in the search bar and press `Enter` or click the search icon to get the weather information.

## Code Overview

### `Weather.jsx`

- **`useEffect`**: Automatically searches for the weather in "Brasilia" when the component mounts.
- **`getBackgroundImage`**: Determines the background image based on the temperature.
- **`handleKeyPress`**: Triggers the search function when the Enter key is pressed.
- **`search`**: Function to fetch and display weather data based on the input city name.

Here's a README text for your weather search app:

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

