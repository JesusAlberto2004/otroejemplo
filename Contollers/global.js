
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup,FacebookAuthProvider} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc,getDoc} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCfWlmdNZ1R3xTPE5lxnIN8M8ArGxnup2k",
  authDomain: "deswebcloud-class.firebaseapp.com",
  projectId: "deswebcloud-class",
  storageBucket: "deswebcloud-class.appspot.com",
  messagingSenderId: "336903889693",
  appId: "1:336903889693:web:7c644a67391c7d08b4b7f4",
  measurementId: "G-9ERHLHLJXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//gestiona la autentificación del usuario
const auth = getAuth(app);
const provider =new FacebookAuthProvider(auth);
const credential = FacebookAuthProvider.credentialFromResult(auth);
export const login_auth=(email,password)=>signInWithEmailAndPassword(auth, email, password);
export const UserCreate=(email,password)=>createUserWithEmailAndPassword(auth, email, password);
export const Logout=()=>signOut(auth);
export const observador=()=>onAuthStateChanged(auth, (user));
export const Popup=()=>signInWithPopup(auth, provider);
export const addcollection=(first,last,phone)=>addDoc(collection(db, "users"),{
  first,last,phone
});
export const getcollections=()=>getDocs(collection(db,"users"));
export const adduser=(id,first,last,phone,image)=>setDoc(doc(db, "usuarios", id), {
  id,first,last,phone,image
});
export const readuser=(id)=>getDoc(doc(db, "usuarios", id));
