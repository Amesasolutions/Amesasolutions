import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc , query, onSnapshot, getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "amesa-server",
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: "727020879736",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-BRT2CJ940H",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// sign up with google
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([])

  // sign up with google
  const SignupWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  // sign Out
  const logOut = () => signOut(firebaseAuth);

  // get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser)
    });

    return () => unSubscribe();
  }, []);

  // create project
  const createProject = async (
    title,
    siteUrl,
    description,
    technologies,
    image
  ) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    const uploadResult = await uploadBytes(imageRef, image);
    
    await addDoc(collection(firestore, "projects"), {
      title,
      siteUrl,
      description,
      technologies,
      imageUrl: uploadResult.ref.fullPath,
    });
  };

  // get projects

  useEffect(() => {
    const q = query(collection(firestore, 'projects'));

    const unSubscribe = onSnapshot(q, (querySnapshot) => {
      let data = [];

      querySnapshot.forEach((docs) => {
        data.push({...docs.data(), id:docs.id})
      })

      setProjects(data)
    })

    return () => unSubscribe()
  }, [])

  // get Image 
  const getImageURL = (path) => {
    const fileRef = ref(storage, path + '');
    return getDownloadURL(fileRef)
  }

  // update project
  const updateProject = async (id, title, siteUrl ,description , technologies,image ) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`)
    const uploadResult = await uploadBytes(imageRef, image)

    await updateDoc(doc(firestore, 'projects', id), {
      title: title,
      siteUrl: siteUrl,
      description: description,
      technologies: technologies,
      imageUrl: uploadResult.ref.fullPath,
    })
  }

  // delete project
  const deleteProject = async (id) => {
    await deleteDoc(doc(firestore, "projects", id))
  }

  return (
    <FirebaseContext.Provider
      value={{ SignupWithGoogle, logOut, user, createProject, projects, getImageURL, updateProject, deleteProject }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
