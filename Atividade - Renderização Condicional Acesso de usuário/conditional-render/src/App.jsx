import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RestrictedPage from './components/RestrictedPage/RestrictedPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = 'KR'

  function Login () {
    setIsLoggedIn(true)
  }

  function Logout () {
    setIsLoggedIn(false)
  }

  const props = {isLoggedIn, user, Login, Logout}
  return (
    <div className="App">
        <RestrictedPage props={props}/>
    </div>
  )
}

export default App
