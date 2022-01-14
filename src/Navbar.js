import { Link } from "react-router-dom";
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Screening Admin</h1>
      <div className="links">
        <Link to="/">Create Event</Link>
        <Link to="/create">Event List</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;