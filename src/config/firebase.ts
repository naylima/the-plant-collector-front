import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCtRV79rez5Lla8MMPPx4NBXSpzIugsYPs',
  authDomain: 'plantshop-78e84.firebaseapp.com',
  projectId: 'plantshop-78e84',
  storageBucket: 'plantshop-78e84.appspot.com',
  messagingSenderId: '458956264708',
  appId: '1:458956264708:web:bf1c7a8e2fa8524a836c51'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);