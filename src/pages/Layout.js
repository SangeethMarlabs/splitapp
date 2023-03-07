import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>      
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/register" class="nav-link active" >Register</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link active" >Contact</Link>
          </li>
        </ul>      
      <Outlet />
    </>
  )
};
export default Layout;