import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { auth } from '../firebaseApp';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logoutUser=async ()=>{
    await signOut(auth)    
  }
  const loginUser=async (email,password)=>{
    try{
       await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
        console.log(err.message)
    }
  }
    return (
    <UserContext.Provider value={{ user,logoutUser,loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
