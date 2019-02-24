# NC News

Northcoders News is a front-end React App that serves up current news based on a selection of topics. This app makes API calls to the back-end NC News. Users can do the following on this application:

* Read articles, information about users of the application and the list of topics available.
* Create new articles and topics.
* Post new comments on articles.
* Vote on articles and comments.


### **Front-End React App**

#### Github Repo:
https://github.com/E-Randz/NC-News-FE

#### Deployed Project:
https://er-nc-news.netlify.com/


### **Back-End API App (for reference)**

#### Github Repo:
https://github.com/E-Randz/BE2-NC-Knews

#### Deployed Project:

For a full list of end-points please go to the following link:

https://northcoders-news-project.herokuapp.com/api

## Getting Started

To get this running on your local machine, please do the following:

1. [Fork this repo](https://github.com/E-Randz/NC-News-FE)
2. Clone the repo in your terminal using the following command:

```
git clone https://github.com/<your-username>/NC-News-FE
```

## Installing and Running in local development environment

### 1.Installing Dependencies

Once you have forked and cloned the repo navigate to the root of the project and run the following command to install the dependencies listed in the package.json:

```bash
npm install
```
This installs the following in dependencies:
```json
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.14",
    "@fortawesome/free-solid-svg-icons": "^5.7.1",
    "@fortawesome/react-fontawesome": "^0.1.4",
    "@reach/router": "^1.2.1",
    "axios": "^0.18.0",
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.3"
  },
  "devDependencies": {
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-react": "^7.12.4"
  }

```
The above are the minimum version numbers.

### 2. Starting the React app

Once all the dependencies have been installed, start the React app with the following command:
```bash
npm start
```
The browser should open a window automatically with the application. If it does not, navigate to localhost:3000 in the browser.


### 3. Logging in

The front-end will require a valid username for the application to get past the Auth component. Below is a list of valid usernames that can selected from the dropdown list.

* tickle122
* grumpy19
* happyamy2016
* cooljmessy
* weegembump
* jessjelly



## Deployment

This app has been deployed on Netlify. The link is in the introduction to this README file. To deploy your own version, please follow the below instructions

1. To allow netflify to handle redirects, create a **_redirects** file in the public folder of your repo and populate it with the following line:
```
/* /index.html 200
```

2. Sign up to Netlify on https://app.netlify.com/signup
3. When prompted to do so, select the option to link with your GitHub account.
4. Once the account has been linked, on the 'Create a new site' page, select the option to continually deploy wuth GitHub.
5. In the 'Repository access' configuration box, select the NC News repository.
6. On the build options tab, verify the default settings, then click 'Deploy Site'



## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - React boilerplate
* [axios](https://www.npmjs.com/package/axios) - promise-based http client
* [PropTypes](https://www.npmjs.com/package/prop-types) - Runtime type checking
* [Reach/Router](https://github.com/reach/router) - Routing for React projects
* [GitHub](https://github.com/) - Version Control
* [React-FontAwesome](https://github.com/FortAwesome/react-fontawesome) - Icons for React

## Authors

* **Emma Randall** - [E-Randz](https://github.com/E-Randz)

## Acknowledgments

* Thank you to the lovely team at Northcoders.
* Avatars made by Freepik on [Flaticon](https://www.flaticon.com/);
* Newspaper stall header background by Flipboard on [Unsplash](https://unsplash.com/photos/9-QUC4fm8Lo)