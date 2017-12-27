// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.initUserPrefs = functions.auth.user().onCreate(event => {
    const user = event.data;
    const userid = user.uid;
    console.log('A new user signed in for the first time');
    return admin.database().ref('preferences/' + userid + '/break').set({
        lowerBound: 600,
        minTime: "60",
        upperBound: 940
    }).then(() => {
        admin.database().ref('preferences/' + userid + '/travel').set({
            allow_bike_sharing: true,
            allow_car_sharing: true,
            bike_disabled: false,
            car_disabled: false,
            disable_walking: false,
            home: "Milan, Italy",
            own_bike: true,
            own_car: true,
            public_transport_disabled: false,
            reduce_carbon_footprint: false
        }).then(() => console.log('User default preferences written to database'));
    });
});