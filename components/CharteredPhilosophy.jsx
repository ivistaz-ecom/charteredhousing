import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

const CharteredPhilosophy = () => {
  return (
    <div className="chartered-philosophy-con">
      <Container>
        <Row className="d-flex flex-column flex-lg-row justify-content-between align-items-center p-3 p-lg-5 mx-4">
          <Col>
            <Image
              src="/homePage/Group 49823.svg"
              alt="Chartered Housing Philosophy"
              width={300}
              height={225}
              className="mb-3 mb-lg-4"
            />
          </Col>

          <Col>
            <div className="horizontal-line d-none d-lg-block" />
          </Col>

          <Col xs={12} lg={5}>
            <div className="mt-4">
              <p className="fst-italic">
                What man conceives in his mind, that he expresses through
                speech, and that he does by deed. -
                <span className="fst-normal fw-bold">Taittiriya Aranyaka</span>
              </p>
              <p>
                This supreme virtue of there being no variance in our thought,
                words and action, though hard to practice, remains steadfast as
                our guiding philosophy. We have even rejected many business
                opportunities - for they did not fall within the framework of
                our philosophy.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CharteredPhilosophy
