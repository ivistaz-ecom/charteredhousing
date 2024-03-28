import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-bg ps-4 pe-4 pt-3 pb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/logo/logo.png"
            alt="chartered logo"
            width={80}
            height={120}
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Projects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Ongoing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Completed
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Location
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    CSR
                  </a>
                </li>
              </ul>
            </li>
            <Button className="rounded-0 border-0 enquire-btn">
              Enquire Now
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
