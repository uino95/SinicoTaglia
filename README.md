# SinicoTaglia - Travlendar+

Repository for the Software Engneering 2 project (academic year 2017/2018).

## Getting Started

These instructions will get you a copy of the Travlendar+ application project up and running on your local machine for code inspection and testing purposes.
If you just want a running version of the application we have a deployed [demo](https://travlendar-plus.firebaseapp.com/).

### Prerequisites for testing

What things you need to install the software and how to install them
* Git
* Node.js
* npm (it usually comes preinstalled with Node.js)
* Bower
which you can install using npm with the following command
```
npm install -g bower
```
* Polymer CLI
which you can install using npm with the following command
```
npm install -g polymer-cli
```

## Running the tests

##### PageSpeed Insights
Go to the [pagespeed website](https://developers.google.com/speed/pagespeed/insights/) and paste the following url:
```
    travlendar-plus.firebaseapp.com
```

##### Lighthouse
* In Google Chrome, go to travlendar-plus.firebaseapp.com
* Open Chrome DevTools.
* Click the Audits tab.
* Click Perform an audit. DevTools shows you a list of audit categories. Leave them all enabled.
* Click Run audit. After 60 to 90 seconds, Lighthouse gives you a report on the page.

If you have troubles or you just prefer the command line tool do the following:
```
    npm install -g lighthouse
    lighthouse travlendar-plus.firebaseapp.com --view
```
wait for the inspection to finish and the result will pop up into a new Chrome tab

##### Suco test
Explain how to run the automated tests for this system
@suco

## Authors

* **Andrea Taglia**
* **Matteo Sincio**
