import BusinessEthics from '@components/BusinessEthics'
import CharteredPhilosophy from '@components/CharteredPhilosophy'
import Leadership from '@components/Leadership'
import Testimonials from '@components/Testimonials'
import { businessEthics, leadership } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/HomeBanner.png"
            alt=""
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
      </section>
      <Container className="p-5">
        <Row>
          <Col>
            <div className="ps-4 ps-md-5 chartered-housing">
              <h1>
                CHARTERED <br /> HOUSING
              </h1>
              <div className="horizontal-line" />
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <Container>
          <Row>
            <Col sm={12} lg={7} className="ms-auto me-5">
              <div className="px-5 pb-5">
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
          <Row className="d-flex flex-column flex-md-row justify-content-between px-md-5">
            <Col>
              <div className="quality-con">
                <Image
                  src="/homePage/Mask Group 261.png"
                  alt="Apartments With Swimming Pool - Chartered Hummingbird"
                  width={600}
                  height={420}
                  className="me-5"
                />
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="align-self-center ms-md-5 mt-5">
                <h1>
                  QUALITY through <br /> TRANSPARENCY
                </h1>
                <div className="horizontal-line" />
                <p className="w-100 mt-4 mt-md-5">
                  Drawing inspiration from our philosophy, we have conceived our
                  corporate tagline.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="p-md-5 mx-md-5">
            <Col>
              <h1>
                BUSINESS ETHICS & STRINGENT <br /> VALUE BASED PRACTICES
              </h1>
              <div className="horizontal-line mb-5" />
            </Col>
            <Col xs={12}>
              <p>
                Our business is conducted with highest ethical values and other
                stringent value based business practices solely aimed at
                benefitting our clients. Some such practices are;
              </p>
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
              <div className="d-flex flex-column flex-md-row mt-4">
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
