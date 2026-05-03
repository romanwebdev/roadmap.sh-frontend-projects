# Weather Web App

A Weather Web App built with Angular. The app allows users to search for weather information by city name, displaying weather conditions, temperature, likelihood of rain, and wind speed. It shows the forecast for the previous day, the present day and the next day.

## Prerequisites

Install [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.dev/installation)

To check if Node.js is installed, run:

```sh
node -v
```

To check if Angular CLI is installed, run:

```sh
ng version
```

Register on the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/) and get API Key.

## Usage

To run the application locally:

1. **Clone or download the repository and navigate to the project directory:**

```sh
cd roadmap.sh-frontend-projects/projects/23-weather-web-app
```

2. **Install dependencies:**

```sh
npm install
```

3. **Rename the .env.example file to .env and paste your API key into NG_APP_API_KEY**

4. **Start the development server:**

```sh
npm run start
```

5. **Open your browser and visit:**

```
http://localhost:4200
```

## Technologies

HTML, CSS, TypeScript, Angular, npm

## Requirements

- [x] The User should be able to enter a location into an input field
- [x] The User will be presented with temperature, wind speed, likelihood of rain, and general weather i.e. Sunny, Raining, Cloudy etc
- [x] The User will be shown the previous and future 24 hour periods
- [x] The weather outlook can be refreshed by the user
- [x] The default weather view is the Users current location
- [x] Angular animation is used

## Link

[roadmap.sh](https://roadmap.sh/projects/weather-app)
