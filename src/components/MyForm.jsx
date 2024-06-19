import React from 'react'
import { TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addTodo } from '../util';
import { useRef } from 'react';

export const MyForm = () => {
   const inputRef=useRef({})
    const handleAdd=()=>{
      console.log('add:',inputRef.current.value);
      if(!inputRef.current.value) return
      addTodo(inputRef.current.value)
      inputRef.current.value=''
    }
  return (
    <div className='form'>
        <TextField className='input' label="new todo..." variant="outlined" inputRef={inputRef}/>
        <AddBoxIcon sx={{fontSize:'3.5rem',color:"green"}} onClick={handleAdd}/>
    </div>
  )
}

