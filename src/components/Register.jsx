import '../styles/Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='card'>
      <div className="container">
      <h2>Register</h2>
        <span>Nome Completo: </span>
        <input type="text" placeholder='Guilherme Ortiz' />
        <span>Email: </span>
        <input type="email" placeholder='example@hotmail.com' />
        <span>Password: </span>
        <input type="password" placeholder='Senha123@' />
        <span>Confirm Password: </span>
        <input type="password" placeholder='Senha123@' />
        <button>Register</button>
        <div className="account">
        <span>Have an account?</span><Link to="/login" >Click here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;