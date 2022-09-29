
import "../Navbar/Navbar.css";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        
          <span className="logo">Masonta Bookings and Attraction</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
