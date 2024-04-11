import Projects from '@components/Projects'
import { projectsMenu } from '@utils/menu'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <img src="/bannerImage/Banner 3.png" className="w-100" />
        </div>
      </section>

      <Container className="mt-5 p-5">
        <Row className="ps-5 pe-5">
          <Col xs={12} md={6}>
            <h1>
              COMPLETED <br /> PROJECTS
            </h1>
            <div className="horizontal-line mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <p>
              In the last 3 decades, we’ve built the best apartments in
              Bangalore. It’s the same with luxury villas as well. All our
              completed projects have earned us the reputation of being a
              reliable and transparent real estate player with a penchant for
              quality. The proof of which lies in many happy customers who vouch
              for us time and again.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <ul className="d-flex justify-content-center flex-wrap project-custom-border p-3 pb-0">
              {projectsMenu.map((item) => (
                <Projects key={item.id} projectDetails={item} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page