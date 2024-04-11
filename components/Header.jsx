import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import EnquireForm from './Form'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-bg p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={70}
            height={115}
            className="logo"
          />
        </Link>
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
        <div
          className="collapse navbar-collapse mt-5 mt-lg-0"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ms-auto mt-4 mt-lg-0">
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
                  <Link className="dropdown-item" href="/ongoing">
                    Ongoing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/completed">
                    Completed
                  </Link>
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
                  <Link className="dropdown-item" href="/our-story">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/location">
                    Location
                  </Link>
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
                Locations
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/hummingbird">
                    Hummingbird
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/grasshopper">
                    Grasshopper
                  </Link>
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
                  <Link className="dropdown-item" href="/csr-activities">
                    CSR
                  </Link>
                </li>
              </ul>
            </li>
            <EnquireForm />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
