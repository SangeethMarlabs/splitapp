import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom/dist';

const Layout = () => {
  let navigate = useNavigate();
  const LogOut = () => {
    localStorage.setItem('userName', 'Guest');
    navigate('/Login');
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
                <a class="navbar-brand" href="/home">SplitApp &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;Logged in as {(localStorage.getItem('userName'))}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="register">Register &nbsp;&nbsp;|</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login">Login&nbsp;&nbsp;&nbsp;&nbsp;</a>
              </li>

              <a class="nav-link"><i class="fas fa-user"></i></a>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={LogOut} href="#">Logout</NavDropdown.Item>
              </NavDropdown>


            </ul>
          </div>


        </div>
      </nav>
      <Outlet />

      {/* <ul class="nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link active" >Contact Us</Link>
        </li>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <li class="nav-item">
            <Link to="/register" class="nav-link active" >Register</Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link active" >Login</Link>
          </li>
        </div>

      </ul>*/}



    </>
  )
};
export default Layout;


