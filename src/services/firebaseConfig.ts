// src/services/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAucjqBDUw40WtYW6-1XsewJRZM9L5e_10",
  authDomain: "campeonato-teste.firebaseapp.com",
  databaseURL: "https://campeonato-teste-default-rtdb.firebaseio.com",
  projectId: "campeonato-teste",
  storageBucket: "campeonato-teste.firebasestorage.app",
  messagingSenderId: "476538156302",
  appId: "1:476538156302:web:ca6e661c80192394be135f",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getDatabase(app);
