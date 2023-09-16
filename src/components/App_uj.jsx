// App.js

import React from 'react';
import './App.css';
import { UserProvider } from './UserContext';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login'; // Ezt az importot frissítsd a saját Login komponensedre
import Todos from './Todos'; // Ezt az importot frissítsd a saját Todos komponensedre

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='app'>
      <UserProvider>
        {user ? <Todos /> : <Login />}
      </UserProvider>
    </div>
  );
}

export default App;
