import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <div className="testimonials-bg mt-5 p-2">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="p-md-5 pt-4 mx-md-5">
              <h1 className="text-white">
                TESTIMONIALS <br /> REFLECTING OUR PROMISE
              </h1>
              <div className="horizontal-line-red" />
              <p className="text-white mt-5 w-50 ms-auto">
                It gives us immense satisfaction when our work is appreciated.
                We feel good that we are surrounded by people who constantly
                vouch for us, and that gives us the energy to create something
                better and even bigger.
              </p>
            </div>
          </Col>

          <Col xs={12} md={8} className="ms-md-auto mt-4">
            <div className="d-flex justify-content-between border p-2 gap-2 bg-white">
              <div className="w-50 d-flex flex-column p-4">
                <img
                  src="/homePage/Group 49862.svg"
                  alt="comma"
                  className="mb-4 align-self-start"
                />
                <p className="fs-5 fw-light">
                  High in quality and very professional in service. Highly
                  satisfying. Creates pleasurable places to live in.
                </p>
                <p className="mb-0 mt-5 fw-bold">Prof. S K Bhagwan</p>
                <p>Principal Consultant</p>
              </div>

              <div className="w-50 d-flex flex-column p-4">
                <img
                  src="/homePage/Group 49863.svg"
                  alt="comma"
                  className="mb-4 align-self-start"
                />
                <p className="fs-5 fw-light">
                  I admire and salute Chartered for their commitment to quality
                  and trustworthiness.
                </p>
                <p className="mb-0 mt-auto fw-bold">Mr. Srishchandra Arya</p>
                <p>Technocrat</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonials
