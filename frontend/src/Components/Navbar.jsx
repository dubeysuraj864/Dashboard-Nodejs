import {Link, Outlet} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav>
        <ul>
      
            <Link to="/">Products</Link>
            <Link to="/AddProducts">Add Products</Link>
            <Link to="/UpdateProducts">Update Products</Link>
            <Link to="/Logout">Logout</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/SignUp">Register</Link>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar;
