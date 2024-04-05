import Card from '@components/Card'
import { cardMenu } from '@utils/menu'
import { Container, Row, Col } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <img src="/storyPage/Mask Group 274@2x.png" className="w-100" />
        </div>
      </section>

      <Container className="mb-5 p-5">
        <Row className="ps-5 pe-5">
          <Col>
            <h1>CSR ACTIVITIES</h1>
            <div className="horizontal-line" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center pb-5 gap-3 flex-wrap">
            {cardMenu.map((item) => (
              <Card key={item.id} cardItems={item} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default page
