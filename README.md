# Ionic Select with Searchbar

## Getting started
1. Install the latest version of the Ionic CLI and Cordova.  
`npm install -g ionic cordova`
2. Install dependencies.  
`npm install`  
`ionic cordova plugin`  
3. Start the app for testing in a browser.  
`ionic serve`  
4. If you get an error related to cross-origin resource sharing, install [a chrome plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi).

## Deployment
See [Deploying to a Device](http://ionicframework.com/docs/intro/deploying/).

## Android

### Generating a certificate
You only need to create a certificate once.  
`keytool -genkey -v -keystore google-play/da-desk.jks -keyalg RSA -keysize 2048 -validity 10000 -alias da-desk`

### Creating a release package
Increment versionCode by 1 and then run:  
`cordova build android --release --buildConfig=google-play/config.json -- --versionCode=20009`

### Testing on a device
Test build:  
`ionic cordova run android --device`

Release build:  
`ionic cordova run android --release --buildConfig=google-play/config.json`

## iOS
Use XCode to debug the app or deploy it to TestFlight. See [Deploying to a Device](http://ionicframework.com/docs/intro/deploying/).

## Live updates with Ionic Cloud Services
See [Live Updates](https://docs.ionic.io/services/deploy/).

### Deploying to a channel
You can deploy to the following channels: `dev`, `staging` and `production`.

`ionic upload --note "Something is fixed..." --deploy dev`  