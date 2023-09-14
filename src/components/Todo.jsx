import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create'
import { deleteTodo, doneTodo } from '../util';
import { EditTodo } from './EditTodo';


export const Todo=({todo,done,id})=> {
    const [open, setOpen] = React.useState(false);

 /* return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;*/

        return (
            <>
          <ListItem sx={{borderBottom:'1px solid lightgray'}}
            key={id}
            secondaryAction={
              <>
              <IconButton edge="end" aria-label="delete" onClick={()=>deleteTodo(id)}>
                <DeleteIcon sx={{color:'red'}} />
                </IconButton>
                 <IconButton edge="end" aria-label="edit" onClick={()=>setOpen(true)}>
                <CreateIcon  sx={{color:'lime'}} />
              </IconButton>
              </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={()=>doneTodo(id,done)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': id }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={todo} />
            </ListItemButton>
          </ListItem> 
          {open && <EditTodo open={open} setOpen={setOpen} todo={todo} id={id}/>}
          </>
        );
     /* })}
    </List>
  );*/
}