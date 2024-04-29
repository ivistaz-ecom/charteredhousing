import BusinessEthics from '@components/BusinessEthics'
import CharteredPhilosophy from '@components/CharteredPhilosophy'
import Leadership from '@components/Leadership'
import Testimonials from '@components/Testimonials'
import { businessEthics, leadership } from '@utils/menu'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import Seo from '@components/Seo'

const Home = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'real estate developers in bangalore, real estate builders in bangalore, best property developers in bangalore'
  const MetaImage = '/homePage/Mask Group 261.png'
  const url = 'https://www.charteredhousing.com/'

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <div>
        <Image
          src="/bannerImage/HomeBanner.png"
          alt="Villas between Koramangala and Electronic city, Bangalore."
          className="responsive-image"
          width={1000}
          height={500}
        />
      </div>

      <Container className="p-4">
        <div className="ps-0 ps-md-3 ps-lg-5 chartered-housing">
          <h1>
            CHARTERED <br /> HOUSING
          </h1>

          <div className="horizontal-line" />
          <div className="py-5 pe-5 w-75 mt-5 d-none d-lg-block">
            <p className="w-50 mt-5">
              The Chartered group was established in 1983 with Finance, Hire
              Purchase and Leasing as its core business. Chartered Leasing, was
              one of the first leasing companies to be registered as NBFC by RBI
              way back in 1985.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <Row>
          <Col sm={12} lg={7} className="ms-auto me-5 mb-4">
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

      <Container className="mb-4">
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
          <Col xs={12} lg={5}>
            <div className="align-self-center ms-md-5 mt-5">
              <h1>
                QUALITY through <br /> TRANSPARENCY
              </h1>
              <div className="horizontal-line mb-4" />
              <p className="mt-4 mt-md-0">
                Drawing inspiration from our philosophy, we have conceived our
                corporate tagline.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mb-4">
        <Row className="p-md-5 mx-md-5">
          <Col>
            <h1>
              BUSINESS ETHICS & STRINGENT <br /> VALUE BASED PRACTICES
            </h1>
            <div className="horizontal-line mb-4" />
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

      <Container fluid className="mb-5">
        <Row>
          <Col>
            {businessEthics.map((item) => (
              <BusinessEthics key={item.id} ethics={item} />
            ))}
          </Col>
        </Row>
      </Container>

      <Testimonials />

      <Container>
        <Row>
          <Col className="mt-5 mt-md-0">
            <div className="text-center pt-5 pt-md-3">
              <h1 className="">LEADERSHIP</h1>
              <p className="fs-5">
                Steering Chartered Housing towards new horizons
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="d-flex flex-column flex-lg-row mt-4">
          {leadership.map((item) => (
            <Leadership key={item.id} leadershipDetails={item} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
