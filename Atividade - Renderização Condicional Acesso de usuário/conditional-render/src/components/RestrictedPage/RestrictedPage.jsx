function RestrictedPage({ props }) {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          <h2>Bem vindo {props.user}</h2>
          <button onClick={props.Logout}>Sair</button>
        </div>
      ) : (
        <div>
          <h2>Você não pode acessar essa página</h2>
          <button onClick={props.Login}>Entrar</button>
        </div>
      )}
    </>
  );
}

export default RestrictedPage
