const Footer = () => {
  return (
    <>
      <section>
        <div className="footer-bg1 p-5 d-flex justify-content-evenly align-items-center">
          <div>
            <h2 className="rotated-text">CHARTERED HOUSING</h2>
          </div>
          <div className="footer-content-con w-75">
            <h1>CONNECT WITH US</h1>
            <h4 className="fw-light">
              Call: +91 8660697659 <span>|</span> Email:
              info@charteredhousing.com
            </h4>
            <div className="d-flex pt-5 w-75">
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
              Chartered Housing (P) Ltd., 27, Victoria Road, Bangalore – 560047
            </p>
          </div>
        </div>
      </section>

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
