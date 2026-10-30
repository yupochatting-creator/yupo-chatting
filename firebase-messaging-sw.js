
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDz20UKnzkY_F43lmv1deE2LQZ6bBGwbDk",
  authDomain: "yupo-chatting.firebaseapp.com",
  projectId: "yupo-chatting",
  storageBucket: "yupo-chatting.firebasestorage.app",
  messagingSenderId: "441870443426",
  appId: "1:441870443426:web:1d4c957d12d8f1252f08fb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "YUPO Chatting";
  const options = {
    body: payload.notification?.body || "You have a new message!",
    icon: "./icon.png"
  };

  self.registration.showNotification(title, options);
});
