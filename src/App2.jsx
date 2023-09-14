import React,{useState} from 'react'
import './App.css'
import { Login } from './components/Login';
import {Todos} from './components/Todos';

const App = () => {
    const [token, setToken] = useState(false);

  return (
    <div>
     {token ? <Todos /> : <Login />}
    </div>
  )
}

export default App
