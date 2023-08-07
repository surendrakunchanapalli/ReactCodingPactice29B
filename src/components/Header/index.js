// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="heading-container">
    <ul className="nav-container">
      <li className="nav-item-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item-container">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
