import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-bg mb-5 p-md-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="p-md-5 pt-4 mx-md-5">
                <h1 className="text-white">
                  TESTIMONIALS <br /> REFLECTING OUR PROMISE
                </h1>
                <div className="horizontal-line-red" />
              </div>
            </Col>
            <Col xs={12} md={6} className="ms-auto my-4 my-lg-0">
              <p className="text-white">
                It gives us immense satisfaction when our work is appreciated.
                We feel good that we are surrounded by people who constantly
                vouch for us, and that gives us the energy to create something
                better and even bigger.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={7} className="ms-md-auto">
            <div className="d-flex flex-column flex-md-row border p-2 bg-white testimonials-con">
              <div className="p-2 p-lg-4">
                <Image
                  src="/homePage/Group 49862.svg"
                  alt="comma"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <p className="fw-light">
                  High in quality and very professional in service. Highly
                  satisfying. Creates pleasurable places to live in.
                </p>
                <p className="mb-0 fw-bold">Prof. S K Bhagwan</p>
                <p>Principal Consultant</p>
              </div>

              <div className="p-2 p-lg-4">
                <Image
                  src="/homePage/Group 49863.svg"
                  alt="comma"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <p className="fw-light">
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
