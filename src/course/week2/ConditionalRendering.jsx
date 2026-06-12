// Shows “Login” button when the user is logged out
// Shows “Logout” button when the user is logged in
// Shows “Welcome, User” text only when logged in

import { useState, useEffect } from "react";
const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])

    if (loading) {
        return <p className="p-32">Loading...</p>
    }

    return (
        <section className="p-24">
            {isLoggedIn && <h1 className="text-center text-6xl text-red-700">Hello Aashish Ramtel Welcome Back!!</h1>}
            <button onClick={() => setIsLoggedIn(prev => !prev)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </section>
    )
}
export default ConditionalRendering;