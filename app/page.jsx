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
      <section className="mb-5">
        <div className="home-banner mt-5 p-5">
          <div className="m-5 p-5">
            <h1>
              CHARTERED <br /> HOUSING
            </h1>
            <div className="horizontal-line" />
          </div>
        </div>
      </section>

      <Container className="mt-5 p-5">
        <Row className="ps-5 pe-5">
          <Col sm={7} className="ms-auto">
            <p>
              We embarked into development of Residential Apartments in 1989.
              The first project Chartered Resorts was a trendsetter which
              changed the then prevalent matchbox concept to aesthetic
              residential complexes. Starting with boutique complexes, we have
              moved over the years, to building skyscrapers, commercial
              complexes and plotted developments. But the core passion for “an
              eye for detail” and to construct every apartment as “our own home”
              remains unchanged and with this we have carved a special niche of
              our own in the competitive Bangalore market.
            </p>
            <p>
              We have also added interiors, facilities management and premium
              construction to our portfolio over a period of time.
            </p>
          </Col>
        </Row>
      </Container>

      <CharteredPhilosophy />

      <Container>
        <Row className="ps-3 pe-5">
          <Col>
            <div className="quality-con d-flex justify-content-between">
              <Image
                src="/homePage/Mask Group 261.png"
                alt=""
                width={600}
                height={450}
                className="me-4"
              />
              <div className="align-self-center w-50 ms-5">
                <h1>
                  QUALITY through <br /> TRANSPARENCY
                </h1>
                <div className="horizontal-line" />
                <p className="w-75 mt-5">
                  Drawing inspiration from our philosophy, we have conceived our
                  corporate tagline.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 p-5">
        <Row className="ps-5 pe-5">
          <Col>
            <h1>
              BUSINESS ETHICS & STRINGENT <br /> VALUE BASED PRACTICES
            </h1>
            <div className="horizontal-line" />
          </Col>
        </Row>
        <Row className="ps-5 pe-5 mt-5 w-75">
          <Col>
            <p>
              Our business is conducted with highest ethical values and other
              stringent value based business practices solely aimed at
              benefitting our clients. Some such practices are;
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="ps-5 pe-5">
        <Row className="ps-5 pe-5">
          <Col>
            {businessEthics.map((item) => (
              <BusinessEthics key={item.id} ethics={item} />
            ))}
          </Col>
        </Row>
      </Container>

      <Testimonials />

      <div className="text-center mt-5">
        <h1>LEADERSHIP</h1>
        <p>Steering Chartered Housing towards new horizons</p>
      </div>

      <Container>
        <Row>
          <Col className="d-flex justify-content-between mt-5">
            {leadership.map((item) => (
              <Leadership key={item.id} leadershipDetails={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
