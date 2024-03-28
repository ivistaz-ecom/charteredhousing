import Card from '@components/Card'
import { cardMenu } from '@utils/menu'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <img src="/storyPage/Mask Group 264@2x.png" className="w-100" />
        </div>
      </section>

      <section className="mb-5">
        <Container>
          <Row>
            <Col>
              <h1>CSR ACTIVITIES</h1>
              <div className="horizontal-line" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center pb-5 gap-3 flex-wrap">
              {cardMenu.map((item) => (
                <Card key={item.id} cardItems={item} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default page
