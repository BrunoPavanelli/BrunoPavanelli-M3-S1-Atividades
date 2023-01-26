import { useState } from 'react'
import './App.css'
import GetUserComponent from './components/GetUserComponent/GetUserComponent'
import WelcomePage from './components/WelcomePage/WelcomePage'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const propsWelcomePage = {setLoggedIn, user};
  const propsGetUserCompnent = {setUser, setLoggedIn};

  return (
    <div className="App">
      {isLoggedIn ? 
        <WelcomePage props={propsWelcomePage}/> 
        :
        <GetUserComponent props={propsGetUserCompnent}/> 
      }

    </div>
  )
}

export default App
