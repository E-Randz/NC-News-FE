# NC News

Northcoders News is a front-end React App that serves up current news based on a selection of topics. This app makes API calls to the back-end NC News. Users can do the following on this application:

* Read articles, information about users of the application and the list of topics available.
* Create new articles and topics.
* Post new comments on articles.
* Vote on articles and comments.

```md
### Front-End React App

#### Github Repo:
https://github.com/E-Randz/NC-News-FE

#### Deployed Project:
https://dazzling-lewin-7fee2d.netlify.com
```


### Back-End API App (for reference)

#### Github Repo:
https://github.com/E-Randz/BE2-NC-Knews

#### Deployed Project:

https://northcoders-news-project.herokuapp.com/

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
```
The above are the minimum version numbers.

#### 2. Starting the React app

Once all the dependencies have been installed, start the React app with the following command:
```bash
npm start
```
The browser should open a window automatically with the application. If it does not, navigate to localhost:3000 in the browser.


#### 3. Logging in

There is no password authentication in the back-end yet, but the front-end will require a valid username for the application to get past the Auth component. Below is a list of valid usernames.

* tickle122
* grumpy19
* happyamy2016
* cooljmessy
* weegembump
* jessjelly



<!-- ## Deployment

This app has been deployed on Netlify. The link is in the introduction to this README file. To deploy your own version, please follow the below instructions

1. Sign up to Netlify on https://app.netlify.com/signup
2. Install Heroku globally on your local machine using the following terminal command:
```bash
npm i -g heroku
```
3. In the root directory of the app log in to Heroku. The following command will make you open a browser to login to Heroku.
4. To create a new app, enter:
```bash
heroku create <app-name>
```
5. Push the app to heroku:
```bash
git push heroku master
```
6. In your user area of Heroku, the app should now be available. Click into it and add 'Heroku Postgres' as an add-on. This will act as the database for the application.
7. Click on the settings for the database and check these credentials against the output of the following terminal command:
```bash
heroku config:get DATABASE_URL
```
8. Verify that your knexfile.js has the production information, as in _Installing and Running in local development environment, Section 2_
9. Migrating and Seeding the Database.
- To create the tables for your database, run:
```bash
npm run migrate:rollback:prod
```
```bash
npm run migrate:latest:prod
```
- If you would like the database to be seeded with the dev-data, run:
```bash
npm run seed:prod
```
- Alternatively, create your own production seed, and alter the following path in **./db/data/index.js** to reference the location of your production data:
```js
const production = require('./<production-data-path>');
```
**see ./db/data/development-data for reference**


## Built With

* [Node](https://nodejs.org/en/) - JavaScript Runtime Environment
* [Express](https://expressjs.com/) - Web application framework
* [Knex](https://knexjs.org/) - SQL Query and Schema Builder
* [Mocha](https://knexjs.org/) - Testing Framework
* [Supertest](https://www.npmjs.com/package/supertest) - Package for testing HTTP requests
* [GitHub](https://github.com/) - Version Control

## Authors

* **Emma Randall** - [E-Randz](https://github.com/E-Randz)

## Acknowledgments

* Thank you to all the lovely people at Northcoders who helped throughout this project. -->