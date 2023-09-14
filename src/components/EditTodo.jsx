import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { editTodo } from '../util';
import { useState } from 'react';

export const EditTodo=({open,setOpen,todo,id})=> {
    const [input,setInput]=useState(todo)
  
  const handleSave = () => {
    editTodo(id,input)
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Módosítás</DialogTitle>
        <DialogContent>
       
          <TextField
            autoFocus
            margin="dense"
           type="text"
           value={input}
           onChange={(e)=>setInput(e.target.value)}
            fullWidth
            multiline
            maxRows={6}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
