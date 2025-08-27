// src/services/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDnoBiBhCIHJLpBHNvAh_mX4O305cwwUhE",
  authDomain: "sistema-fut-ibav.firebaseapp.com",
  databaseURL: "https://sistema-fut-ibav-default-rtdb.firebaseio.com",
  projectId: "sistema-fut-ibav",
  storageBucket: "sistema-fut-ibav.firebasestorage.app",
  messagingSenderId: "728765466766",
  appId: "1:728765466766:web:c45959e3ff99eaa00861df"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getDatabase(app);
