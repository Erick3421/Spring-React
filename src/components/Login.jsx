import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <main>
        <div className='card'>
            <div className="container">
                <h2>Login</h2>
                <span>Email: </span>
                <input type="email" placeholder='example@hotmail.com' />
                <span>Password: </span>
                <input type="password" placeholder='Senha123@' />
                <button>Login</button>
                <div className="account">
                    <span>Don't have an account?</span><Link to="/register" >Click here</Link>
                </div>
            </div>
        </div>
        </main>
    );
}

export default Login;