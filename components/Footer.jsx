import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className="footer-bg1 p-4">
        <Container fluid>
          <Row>
            <Col>
              <div className="pe-4 py-4 d-flex align-items-center">
                <h2 className="vertical-text me-5 d-none d-md-block">
                  CHARTERED HOUSING
                </h2>
                <div className="footer-content-con ms-5 w-100">
                  <h1>CONNECT WITH US</h1>
                  <h5 className="fw-light mt-3">
                    Call: +91 8660697659{' '}
                    <span className="d-none d-md-inline">|</span>{' '}
                    <br className="d-md-none" /> Email:
                    info@charteredhousing.com
                  </h5>
                  <div className="d-flex flex-column flex-md-row pt-5 w-75">
                    <ul className="p-0 me-4 w-50">
                      <h4 className="fw-light">Our Projects</h4>
                      <hr />
                      <li>
                        <Link className="custom-link" href="/ongoing">
                          Ongoing
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/completed">
                          Completed
                        </Link>
                      </li>
                    </ul>
                    <ul className="p-0 me-4 w-50">
                      <h4 className="fw-light">Company</h4>
                      <hr />
                      <li>
                        <Link className="custom-link" href="/our-story">
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/location">
                          Locations
                        </Link>
                      </li>
                    </ul>
                    <ul className="p-0 me-4 w-50">
                      <h4 className="fw-light">Resources</h4>
                      <hr />
                      <li>
                        <Link className="custom-link" href="/">
                          Media
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/csr-activities">
                          CSR
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link className="custom-link" href="/">
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <h4 className="fw-light">Office Address</h4>
                  <p>
                    Chartered Housing (P) Ltd., 27, Victoria Road, Bangalore –
                    560047
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section>
        <div className="footer-bg2 text-center p-4 d-flex flex-column flex-md-row justify-content-between">
          <div>
            <p>©2024 Chartered Housing. All Rights Reserved.</p>
          </div>
          <div>
            <p>Terms of Use | Privacy Policy | Disclaimer | Sitemap</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
