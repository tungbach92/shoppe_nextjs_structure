import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// TODO: change firebase config here
const firebaseConfig1 = {
  // your config from firebase 1
  apiKey: "AIzaSyClVfv-TwTKLRYJKp_C40kMh1hPz7lSWGE",
  authDomain: "classfunc-template.firebaseapp.com",
  projectId: "classfunc-template",
  storageBucket: "classfunc-template.appspot.com",
  messagingSenderId: "495764526573",
  appId: "1:495764526573:web:1048cf7ad7090af3d003e4",
  measurementId: "G-E6TJMZRWN9"
};

// config to default firebase 1
const app_1 = initializeApp(firebaseConfig1);
export const db = getFirestore(app_1);
export const auth = getAuth(app_1)
export const storage = getStorage(app_1)

// config to firebase 2
// const firebase_2 = {
//   // your config from firebase 2
// };
// const app_2 = initializeApp(firebase_2, "secondary");
// export const db_2a = getFirestore(app_2);
// export const auth_2a = getAuth(app_2)
// export const storage_2a = getStorage(app_2)

const Fire = app_1
export default Fire
if (typeof window !== "undefined") window.Fire = Fire

