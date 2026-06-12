const ConditionalRendering = () => {
    const CheckLogin = () => {
        const isLoggedIn = true;
        if (isLoggedIn) (
            <button>Logout</button>
        )
        else if (!isLoggedIn) {
            return <button>Login</button>
        }
    }

    return (
        <>
            <h1>{isLoggedIn ? "Hello User you are logged In": "Login First"}</h1>
            <CheckLogin/>
        </>
    )
}
export default ConditionalRendering;