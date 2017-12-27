
// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
// Import and initialize the Firebase Admin SDK.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


// Adds a message that welcomes new users into the chat.
exports.addWelcomeMessages = functions.auth.user().onCreate(event => {
  const user = event.data;
  console.log('A new user signed in for the first time.');
  const userid = user.uid;

  // Saves the new welcome message into the database
  // which then displays it in the FriendlyChat clients.
  const path = 'preferences/' + userid + '/';
  return admin.database(path + 'break').ref().push({
    lowerBound: 540,
    lowerBound: 60,
    lowerBound: 940
  }).then(() => console.log('User default preferences written to database'));
});