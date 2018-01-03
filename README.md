# SinicoTaglia - Travlendar+

Repository for the Software Engneering 2 project (academic year 2017/2018).

## Getting Started

These instructions will get you a copy of the Travlendar+ application project up and running on your local machine for code inspection and testing purposes.
If you just want a running version of the application we have a deployed [demo](https://travlendar-plus.firebaseapp.com/).

The first time you log in you have to set your travel and break time preferences, in order to do so click on the edit preferences button, here you can modify both the break time preferences and the travel preferences clicking the correspondent button. 

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

##### Unit testing of the main components
* Clone this repository
* open command line tool in the folder where you have cloned the repository
* change directory to the following path
```
cd Implementation\ and\ Test\ Deliverable/travlendar/public/
```
* Type 
```
polymer serve
```
you will have something like this
```
info:    Files in this directory are available under the following URLs
      applications: http://127.0.0.1:8081
      reusable components: http://127.0.0.1:8081/components/travlendar/
```
* copy and paste the second link in the browser of your choices modifyng the path like this
```
http://127.0.0.1:8081/components/travlendar/components/test/
```
then the test should start and you will see the outcome of the unit tests we have perfomed (please refer to section 5.3 of the ITD document to see a description of the unit tests performed).

## Authors

* **Andrea Taglia**
* **Matteo Sincio**
