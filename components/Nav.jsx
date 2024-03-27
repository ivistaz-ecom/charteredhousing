import Image from 'next/image'
import { Button } from 'react-bootstrap'

const Nav = () => {
  return (
    <nav className="navbar p-4 d-flex justify-content-between">
      <div>
        <Image
          src="/logo/logo.png"
          alt="chartered logo"
          width={60}
          height={100}
          className="logo"
        />
      </div>
      <div className="d-flex align-items-center">
        <ul className="d-flex gap-3 me-4 mt-3">
          <li>Our Projects</li>
          <li>Company</li>
          <li>Resources</li>
        </ul>
        <Button className="rounded-0 border-0 enquire-btn">Enquire Now</Button>
      </div>
    </nav>
  )
}

export default Nav
