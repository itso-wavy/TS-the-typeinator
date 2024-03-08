import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9mbnkB9hV6EtvVBGVSLl7iQl0cj72Lo8',
  authDomain: 'nwitter-reloaded-f0305.firebaseapp.com',
  projectId: 'nwitter-reloaded-f0305',
  storageBucket: 'nwitter-reloaded-f0305.appspot.com',
  messagingSenderId: '899723496337',
  appId: '1:899723496337:web:70c1f5e8ac42ab19ad2830',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
