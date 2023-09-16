import React,{useContext} from 'react'
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from '../context/UserContext';

export const Logout=()=> {
  const {logoutUser}=useContext(UserContext)
  return (
    <div>
       <div className="text-right m-1">

        <Button onClick={()=>logoutUser()}   variant="contained" ><LogoutIcon /></Button>
       
    </div>
     
    </div>
  )
}
