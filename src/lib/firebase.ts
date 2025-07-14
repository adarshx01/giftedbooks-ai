// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//config here web based
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase instances
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, auth, storage };
