import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-bg mt-5 p-2">
        <Container className="mt-5 p-5">
          <Row className="ps-5 pe-5">
            <Col>
              <h1 className="text-white fw-normal">
                TESTIMONIALS <br /> REFLECTING OUR PROMISE
              </h1>
              <div className="horizontal-line bg-white" />
            </Col>
          </Row>
          <Row className="ps-5 pe-5">
            <Col sm={7} className="ms-auto">
              <p className="text-white mt-5 fw-light">
                It gives us immense satisfaction when our work is appreciated.
                We feel good that we are surrounded by people who constantly
                vouch for us, and that gives us the energy to create something
                better and even bigger.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="testimonials-card">
        <Row>
          <Col sm={8} className="ms-auto">
            <div className="d-flex justify-content-between border p-4 gap-3 bg-white">
              <div className="w-50 p-4">
                <img
                  src="/homePage/Group 49862.svg"
                  alt="comma"
                  className="mb-4"
                />
                <p className="fs-5 fw-light">
                  High in quality and very professional in service. Highly
                  satisfying. Creates pleasurable places to live in.
                </p>
                <p className="mb-0 fw-bold">Prof. S K Bhagwan</p>
                <p>Principal Consultant</p>
              </div>

              <div className="w-50 p-4">
                <img
                  src="/homePage/Group 49863.svg"
                  alt="comma"
                  className="mb-4"
                />
                <p className="fs-5 fw-light">
                  I admire and salute Chartered for their commitment to quality
                  and trustworthiness.
                </p>
                <p className="mb-0 fw-bold">Mr. Srishchandra Arya</p>
                <p>Technocrat</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Testimonials
