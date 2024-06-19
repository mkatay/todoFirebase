import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged,signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { auth } from '../firebaseApp';//az auth objektum, a Firebase Authentication példánya

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Regisztráljuk a felhasználót az onAuthStateChanged metódussal,
    // amely meghívásra kerül minden alkalommal, amikor a felhasználó állapota megváltozik.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Ha a felhasználó állapota megváltozik (pl. bejelentkezés vagy kijelentkezés), 
      // akkor a setUser függvényt meghívjuk az új felhasználói állapottal.
      setUser(currentUser);
    });
//Az onAuthStateChanged metódus visszaad egy függvényt, amellyel leiratkozhatunk az állapotváltozás figyeléséről. Ezt a függvényt nevezzük el unsubscribe-nak.
//A useEffect hook visszatérési értéke egy függvény lehet, amelyet a React a komponens megszünésekor hív meg
//az eseménykezelőt leiratkoztassuk, amikor a komponens megszűnik 
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
