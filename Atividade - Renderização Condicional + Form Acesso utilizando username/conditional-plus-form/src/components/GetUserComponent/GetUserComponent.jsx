import { useState } from "react";

function GetUserComponent({props}) {
  const {setUser, setLoggedIn} = props;

  const [userInput, setUserInput] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    
    setUser(userInput);

    setLoggedIn(true);
  }

  function changeUserInputState(event) {
    event.preventDefault();

    const userInfos = event.target.value;

    setUserInput(userInfos);
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Insira seu nome"
        value={userInput}
        onChange={changeUserInputState}
      />
      <button type="submit" >Acessar com seu nome</button>
    </form>
  );
}

export default GetUserComponent
