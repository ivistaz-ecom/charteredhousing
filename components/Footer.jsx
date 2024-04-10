import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <div className="footer-bg1 p-4">
        <Container fluid>
          <Row>
            <Col>
              <div className="pe-4 py-4 d-flex align-items-center">
                <h2 className="vertical-text me-5">CHARTERED HOUSING</h2>
                <div className="footer-content-con ms-5 w-100">
                  <h1>CONNECT WITH US</h1>
                  <h5 className="fw-light mt-3">
                    Call: +91 8660697659 <span>|</span> Email:
                    info@charteredhousing.com
                  </h5>
                  <div className="d-flex felx-wrap pt-5 w-75">
                    <ul className="p-0 m-0 w-50">
                      <h4 className="fw-light">Our Projects</h4>
                      <hr />
                      <li>Ongoing</li>
                      <li>Completed</li>
                    </ul>
                    <ul className="w-50">
                      <h4 className="fw-light">Company</h4>
                      <hr />
                      <li>Our Story</li>
                      <li>Locations</li>
                    </ul>
                    <ul className="w-50">
                      <h4 className="fw-light">Resources</h4>
                      <hr />
                      <li>Media</li>
                      <li>Blog</li>
                      <li>CSR</li>
                      <li>Careers</li>
                      <li>FAQs</li>
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
        <div className="footer-bg2 p-3 pt-4 d-flex justify-content-between">
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
