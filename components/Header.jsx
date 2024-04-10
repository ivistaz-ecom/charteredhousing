import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

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
                  <Link className="dropdown-item" href="/ongoing-project">
                    Ongoing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/completed-project">
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
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/csr">
                    CSR
                  </Link>
                </li>
              </ul>
            </li>
            <Button className="rounded-0 border-0 enquire-btn ms-lg-4 mt-2 mt-md-0 align-self-start">
              Enquire Now
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
