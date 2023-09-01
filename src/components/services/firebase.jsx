import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDewtygMq42iAxVQYDpcm6crl79HVd-IMI",
  authDomain: "wolpou.firebaseapp.com",
  projectId: "wolpou",
  storageBucket: "wolpou.appspot.com",
  messagingSenderId: "702572598903",
  appId: "1:702572598903:web:9da978cae0c023ac7e5872",
  measurementId: "G-R54GETN7V8"
}).auth();