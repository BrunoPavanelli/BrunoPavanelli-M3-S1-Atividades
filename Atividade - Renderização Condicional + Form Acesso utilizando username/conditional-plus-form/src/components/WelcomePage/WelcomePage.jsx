function WelcomePage ({props}) {
    const {setLoggedIn, user} = props;

    function handleLogout () {
        setLoggedIn(false);
    }

    return (
        <>
            <h2>Bem vindo {user}</h2>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default WelcomePage;