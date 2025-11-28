import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCfLFgbq7m-pEK-jw-PQvwGh4zlyGE8n4w",
    authDomain: "nasir-48572.firebaseapp.com",
    projectId: "nasir-48572",
    storageBucket: "nasir-48572.appspot.com",
    messagingSenderId: "1032758456576",
    appId: "1:1032758456576:web:eaea202eb1f313efc743e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Protect Page
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
    }
});

// 🔓 Logout Function
window.logout = function () {
    auth.signOut();
    window.location.href = "login.html";
}
