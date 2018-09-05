This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Setup
- npm install 
- In command line go cd src and go to that directory, create-react-app will only allow imports from src folder. 
- Type in touch key.js to create a key.js file in the src directory.
- Add in the following in the key.js file:
module.exports{
     "api_key": [[please enter your api key here in string format]]
}
- app should import api key from key.js in the rateQuote.js file in store folder.
-npm start


# Technology Used
- Node-Fetch: Fetch for node.js to call apis
- Semantic UI React: CSS framework for React

# Need Work
- testing, unit tests, ect..
- Fix API asynchronous issue. Promises are getting resolved with status code 200 despite API not finishing retrieving all results. 
