import React,{useState} from 'react'
import './App.css'
import { Login } from './components/Login';
import {Todos} from './components/Todos';
import { auth } from './firebaseApp';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
    const [user, setUser] = useState(null);
    //ez a fg.lehetővé teszi, h figyeljük a felhasználó bejelentkezési állapotának változásait.
    //Amikor a felhasználó bejelentkezik vagy kijelentkezik, a user állapot frissítődik, 
    //és a komponens újra renderelődik,
    onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
    console.log(user);
  return (
    <div className='app'>
     {user ? <Todos /> : <Login />}
    </div>
  )
}

export default App
