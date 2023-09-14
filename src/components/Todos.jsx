
import {db} from '../firebaseApp'
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore'
import React,{useEffect,useState} from 'react'
import { Logout } from './Logout'
import {Todo} from './Todo'
import List from '@mui/material/List';
import { MyForm } from './MyForm'

export const Todos=()=> {
    const [todos,setTodos] =useState([])
  useEffect(()=>{
    const collectionRef=collection(db, "todolist");
    const q=query(collectionRef,orderBy('timestamp','desc'))
    //const unsubscribe=onSnapshot( collection(db,'todolist'),(snapshot)=>{
     const unsubscribe=onSnapshot(q,(snapshot)=>{  
      //console.log((snapshot.docs));
    //console.log(snapshot.docs.map(doc=>doc.data()));
      //setTodos(snapshot.docs.map(doc=>doc.data()))//nem lesz meg az azonosító
      setTodos(snapshot.docs.map(doc=>({...doc.data(), id: doc.id })))
   })
   return ()=>unsubscribe();
  },[])
console.log(todos);

  return (
    <div className='todos'>
    <h1>My Todos</h1>
    <Logout />
    <MyForm />
    <List sx={{ width: '100%', bgcolor: 'background.paper',margin:'auto' }}>
      {todos.map((obj)=>
          <Todo key={obj.id} {...obj} />
      )}
      </List>
    </div>
    
  )
}

