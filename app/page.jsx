import BusinessEthics from '@components/BusinessEthics'
import CharteredPhilosophy from '@components/CharteredPhilosophy'
import Leadership from '@components/Leadership'
import Projects from '@components/Projects'
import Testimonials from '@components/Testimonials'
import { businessEthics, leadership } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <div className="home-banner mb-5">
        <Container>
          <Row>
            <Col>
              <div className="p-5 ms-5 mt-5">
                <h1>
                  CHARTERED <br /> HOUSING
                </h1>
                <div className="horizontal-line" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col sm={12} lg={7} className="ms-auto me-5">
              <div className="p-5">
                <p>
                  We embarked into development of Residential Apartments in
                  1989. The first project Chartered Resorts was a trendsetter
                  which changed the then prevalent matchbox concept to aesthetic
                  residential complexes. Starting with boutique complexes, we
                  have moved over the years, to building skyscrapers, commercial
                  complexes and plotted developments. But the core passion for
                  “an eye for detail” and to construct every apartment as “our
                  own home” remains unchanged and with this we have carved a
                  special niche of our own in the competitive Bangalore market.
                </p>
                <p>
                  We have also added interiors, facilities management and
                  premium construction to our portfolio over a period of time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <CharteredPhilosophy />

      <div className="mb-4">
        <Container>
          <Row>
            <Col>
              <div className="quality-con d-flex justify-content-between px-5">
                <Image
                  src="/homePage/Mask Group 261.png"
                  alt=""
                  width={632}
                  height={467}
                  className="me-4"
                />
                <div className="align-self-center w-50 ms-5">
                  <h1>
                    QUALITY through <br /> TRANSPARENCY
                  </h1>
                  <div className="horizontal-line" />
                  <p className="w-75 mt-5">
                    Drawing inspiration from our philosophy, we have conceived
                    our corporate tagline.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <div className="p-5 mx-5">
                <h1>
                  BUSINESS ETHICS & STRINGENT <br /> VALUE BASED PRACTICES
                </h1>
                <div className="horizontal-line mb-5" />
                <p className="w-50">
                  Our business is conducted with highest ethical values and
                  other stringent value based business practices solely aimed at
                  benefitting our clients. Some such practices are;
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              {businessEthics.map((item) => (
                <BusinessEthics key={item.id} ethics={item} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      <Testimonials />

      <div className="mt-5">
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <h1 className="mt-5">LEADERSHIP</h1>
                <p>Steering Chartered Housing towards new horizons</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container fluid>
          <Row>
            <Col>
              <div className="d-flex justify-content-between mt-4">
                {leadership.map((item) => (
                  <Leadership key={item.id} leadershipDetails={item} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home
