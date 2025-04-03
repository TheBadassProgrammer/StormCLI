# StormCLI ⛅ - Terminal-Style Weather Application

![StormCLI](https://github.com/user-attachments/assets/39e4531c-989d-4fd8-ae11-156703ddf99d)


## Description

StormCLI is a stylish, terminal-inspired weather application that provides real-time weather data with a cyberpunk aesthetic. The app features a Matrix-style rain animation background, atmospheric storm sounds, and displays weather information in a vintage terminal interface.

## Features

- 🌡️ Real-time weather data display including temperature and wind speed
- 🌧️ Weather condition descriptions based on weather codes
- 🖥️ Retro terminal interface with Matrix-style rain animation
- 🔊 Ambient storm sounds for immersive experience
- 🌐 Global location support through geocoding

## Demo

[View Live Demo]([https://TheBadassProgrammer.github.io/stormcli](https://storm-cli.vercel.app/))

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Open-Meteo API for weather data
- Geocoding API for location coordinates
- YouTube API for background storm sounds

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/stormcli.git
   ```

2. Navigate to the project directory:
   ```
   cd stormcli
   ```

3. Open `index.html` in your browser or use a local server:
   ```
   # Using Python
   python -m http.server
   
   # Or with Node.js
   npx serve
   ```

## Usage

1. Type a city name in the input field
2. Press Enter to search
3. View the weather results displayed in terminal format

## API Information

StormCLI uses the following free APIs:

- [Open-Meteo Weather API](https://open-meteo.com/): For current weather data
- [Open-Meteo Geocoding API](https://open-meteo.com/): For converting city names to coordinates

No API keys are required as these are free, open APIs.

## Customization

### Changing the Background Sound

To change the background storm sound:
1. Find a YouTube video with your preferred ambient sound
2. Get the video ID (the part after `v=` in the URL)
3. Replace the `stormVideoId` variable in `script.js`

### Modifying the Matrix Rain Effect

The Matrix rain effect can be customized by changing the following variables in `script.js`:
- `columns`: Controls the density of the rain
- `chars`: Characters used in the rain effect
- The color and opacity in the `drawMatrix()` function

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## Credits

- Terminal font: [VT323](https://fonts.cdnfonts.com/css/vt323)
- Matrix rain effect inspired by The Matrix movies
- Storm sounds from YouTube

## Author

Your Name - [Your Website](https://yourwebsite.com)

## Acknowledgments

- Thanks to Open-Meteo for providing free weather APIs
- Inspired by retro terminal interfaces and cyberpunk aesthetics
