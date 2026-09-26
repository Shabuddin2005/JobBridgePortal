import { useContext, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./Login.css"

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login, isLoggedIn} = useContext(AuthContext)

    const handleSubmit = (event) => {

    event.preventDefault()

    login()

    navigate("/dashboard")
}

    return (
    <div className="login-page">

        <div className="login-card">

            <h1>Login</h1>

            <p>
                Login to your JobBridge account
            </p>

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <label>Email</label>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <label>Password</label>

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button
                    className="login-button"
                    type="submit"
                >
                    Login
                </button>

            </form>

            {isLoggedIn && (
                <div className="login-success">
                    Login successful!
                </div>
            )}

        </div>

    </div>
)
}

export default Login