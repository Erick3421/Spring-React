import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="container-nav">
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/solution">Solution</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="login-register">
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/register">Register</Link></button>
        </div>
      </div>
    </div>
  );          
}

export default NavBar;