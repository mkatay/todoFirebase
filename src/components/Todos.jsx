
import React,{useEffect,useState} from 'react'
import { Logout } from './Logout'
import {Todo} from './Todo'
import List from '@mui/material/List';
import { MyForm } from './MyForm'
import { readTodos } from '../util'


export const Todos=()=> {
  const [todos,setTodos] =useState([])
  useEffect(()=>{
    const unsubscribe = readTodos(setTodos); //backend -firestore
    return () => unsubscribe(); // Tisztitás
  },[])

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

