import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBlpkmu77TZzip0ytjJNCVXm4LymgF-JqI",
  authDomain: "goalcoach-6d48f.firebaseapp.com",
  databaseURL: "https://goalcoach-6d48f.firebaseio.com",
  projectId: "goalcoach-6d48f",
  storageBucket: "",
  messagingSenderId: "593385552141"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
