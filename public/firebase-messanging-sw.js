importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyAsUv2gY5vXz2wA_1Y1vdvBmXluiKfKnrI",
  authDomain: "calliverse-3e2a6.firebaseapp.com",
  projectId: "calliverse-3e2a6",
  storageBucket: "calliverse-3e2a6.appspot.com",
  messagingSenderId: "680626398443",
  appId: "1:680626398443:web:e139c7f6108f4166080aae",
  measurementId: "G-D3RNF13R08"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png", // Path to your app icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});