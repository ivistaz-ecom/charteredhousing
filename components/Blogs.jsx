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
    <Container>
      <Row>
        <Col xs={12}>
          <div className="p-md-5 mx-md-5">
            <h1 className="w-50">{title}</h1>
            <div className="horizontal-line mb-4" />
          </div>
        </Col>
        <Col xs={12} md={7} className="ms-md-auto">
          <div>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>
        </Col>

        <Col xs={12} md={9} className="ms-md-auto">
          <div className="mb-5">
            <img src={imageUrl} alt={name} className="w-100 mt-4" />
            <h4 className="fw-light mt-4">{name}</h4>
            <p className="mt-4 w-75">{details}</p>
            <Button className="rounded-0 border-0 enquire-btn mt-4">
              Read More
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Blogs
