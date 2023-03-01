import { Link } from "@inertiajs/react"

export default function Navigation(props) {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">MoviFP Sostenible</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link mx-2 active bi bi-house" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2 bi bi-search" href="#">Search</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2 bi bi-car-front" href="#">Publish a ride</a>
          </li>
          @guest
          <li className="nav-item">
            <a className="nav-link mx-2 bi bi-door-open" href="login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2 bi bi-check-circle" href="register">Sign up</a>
          </li>
          @else
          <li className="nav-item dropdown">
            <a className="nav-link mx-2 dropdown-toggle bi bi-person-circle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               {props.user ? props.user.name : 'User'}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item bi bi-car-front" href="#">My rides</a></li>
              <li><a className="dropdown-item bi bi-chat" href="#">Messages</a></li>
              <li><a className="dropdown-item bi bi-credit-card" href="#">Payments</a></li>
              <li><a className="dropdown-item bi bi-person-circle" href="#">Profile</a></li>
              <li><a className="dropdown-item bi bi-door-closed" href="logout" onClick="event.preventDefault();
									document.getElementById('logout-form').submit();">
                Logout
              </a>
                <form id="logout-form" action="logout" method="POST" className="d-none">
                  @csrf
                </form></li>
            </ul>
          </li>
          @endguest
        </ul>
      </div>
    </div>
  </nav>)
};