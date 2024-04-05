import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Blogs = ({ blogsItem }) => {
  const {
    title,
    description1,
    description2,
    description3,
    imageUrl,
    name,
    details,
  } = blogsItem

  return (
    <Container className="p-5 mt-5">
      <Row className="ps-5 pe-5">
        <Col>
          <h1 className="w-50">{title}</h1>
          <div className="horizontal-line" />
        </Col>
      </Row>

      <Row>
        <Col sm={7} className="ms-auto">
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
        </Col>

        <Row className="d-flex flex-column">
          <Col sm={9} className="ms-auto">
            <img src={imageUrl} alt={name} className="w-100 mt-4" />
            <h4 className="fw-light mt-4">{name}</h4>
            <p className="mt-4 w-75">{details}</p>
            <Button className="rounded-0 border-0 enquire-btn mt-4">
              Read More
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Blogs
