import {
  getAuth,
  sendSignInLinkToEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

// User Login With Google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => setUser(result))
      .catch((err) => console.log(err));
  };
// User Login with Email
  const signinWithEmail = (email, password) => {
    sendSignInLinkToEmail(auth, email, password)
      .then((result) => setUser(result))
      .catch((err) => console.log(err));
  };
// User Logout
  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
// User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      });
      return () => unsubscribe;
  },[])

  return {
    user,
    signinWithGoogle,
    signinWithEmail,
    logOut
  };
};

export default useFirebase;
