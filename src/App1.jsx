import './App.css'
import {db} from './firebaseApp'
import {onSnapshot,collection} from 'firebase/firestore'
import React,{useEffect} from 'react'

function App() {
  useEffect(()=>{
    const todolistCollectionRef=collection(db,'todolist')
    const unsubscribe=onSnapshot(todolistCollectionRef ,(snapshot)=>{
      //console.log((snapshot.docs));
      console.log(snapshot.docs.map(doc=>doc.data()));
   })
   return ()=>unsubscribe();
  },[])

  return (
    <h1>Hello</h1>
  )
}

export default App
