import React from 'react'
import { TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { addTodo } from '../util';
import { useState } from 'react';

export const MyForm = () => {
    const [input,setInput]=useState('')
    const handleAdd=()=>{
      addTodo(input)
      setInput('')
    }
  return (
    <div className='form'>
        <TextField className='input' label="new todo..." variant="outlined" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <AddBoxIcon sx={{fontSize:'3.5rem',color:"green"}} onClick={handleAdd}/>
    </div>
  )
}

