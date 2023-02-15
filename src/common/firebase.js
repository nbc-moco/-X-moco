import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
  apiKey: 'AIzaSyCzN2tCMYsWXAox6D_olgaMVQM_DD5X0Tc',
  authDomain: 'moco-project-defe9.firebaseapp.com',
  databaseURL:
    'https://moco-project-defe9-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'moco-project-defe9',
  storageBucket: 'moco-project-defe9.appspot.com',
  messagingSenderId: '854864723646',
  appId: '1:854864723646:web:c0f50ad676b017739ea8ef',
};

export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
