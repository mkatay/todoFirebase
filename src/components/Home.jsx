import React,{useContext} from 'react'
import { UserContext} from "../context/UserContext";
import { Todos } from './Todos';
import { Login } from './Login';

export const Home = () => {
    const { user } = useContext(UserContext);
  return (
    <>
    {user ? <Todos/> : <Login/>}
    </>
  )
}
