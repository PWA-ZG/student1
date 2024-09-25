importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js'); 
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');firebase.initializeApp({ 
    apiKey: "from firebase config",
    authDomain: "from firebase config", 
    databaseURL: "from firebase config", 
    projectId: "from firebase config", 
    storageBucket: "from firebase config", 
    messagingSenderId: "from firebase config", 
    appId: "from firebase config", 
    measurementId: "from firebase config" 
});
const messaging = firebase.messaging();