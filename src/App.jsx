import React, { useContext } from "react";
import "./App.css";
import {UserProvider } from "./context/UserContext";
import { Home } from "./components/Home";

const App = () => {
  
  return (
    <UserProvider>
      <div className="app">
           <Home /> 
       </div>
    </UserProvider>
  );
};

export default App;
