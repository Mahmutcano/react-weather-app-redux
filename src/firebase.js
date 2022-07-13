// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
import store from './redux/store'
import {login as loginHandle, logout as logoutHandle} from './redux/authSlice'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARcpuByECGB4ldIxjh03zKBag0cA9Z-lI",
  authDomain: "weather-app-4e359.firebaseapp.com",
  projectId: "weather-app-4e359",
  storageBucket: "weather-app-4e359.appspot.com",
  messagingSenderId: "986033910614",
  appId: "1:986033910614:web:89a61aae621738c6359cf7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Register Firebase
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// Login Firebase
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

// LoginOut Firebase
export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

// Login Logout Firebase Practice
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle(user))
  } else {
    store.dispatch(logoutHandle())
  }
})

// Update Profile City Firebase
export const update = async data => {
  try {
    await updateProfile(auth.currentUser, data)
    toast.success('Updating')
    return true
  } catch (error) {
    toast.error(error.message)
  }
}

export default app;
