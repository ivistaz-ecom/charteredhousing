import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-bg pt-3 pb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image
            src="/logo/logo.png"
            alt="chartered logo"
            width={70}
            height={115}
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
                  <a className="dropdown-item" href="/ongoing-project">
                    Ongoing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/completed-project">
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
                  <a className="dropdown-item" href="/our-story-page-1">
                    Our Story
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/our-story-page-2">
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
                  <a className="dropdown-item" href="/our-story-page-3">
                    CSR
                  </a>
                </li>
              </ul>
            </li>
            <Button className="rounded-0 border-0 enquire-btn ms-4">
              Enquire Now
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
