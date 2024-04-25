import { csrActivities } from '@utils/menu'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const csrDetails = ({ params }) => {
  const filteredActivity = csrActivities.filter((item) => item.id == params.id)
  const { title, description, table } = filteredActivity[0].details

  return (
    <>
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/CSRBanner.png"
            className="responsive-image"
            alt="Chartered Housing  - CSR Activities"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <Container className="mt-5 p-5 mb-5">
        <Row className="ps-5">
          <Col xs={12}>
            <h1>{title}</h1>
            <div className="horizontal-line mb-4" />
          </Col>

          <Col>
            <p className="mt-4 mb-5">{description}</p>
          </Col>

          <Col xs={12}>
            <table className="table border">
              <thead>
                <tr>
                  {table.head.map((heading) => {
                    return (
                      <th scope="col" className="p-3">
                        {heading}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((eachRow) => {
                  return (
                    <tr>
                      {eachRow.map((item) => {
                        return <td className="border p-3">{item}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Col>

          <Col xs={12}>
            <div className="border mt-5 p-4">
              <h3 className="mb-3">RECENT POSTS</h3>
              <ul className="ongoing-list-con">
                <li>How do I Choose a Good House Moving Company?</li>
                <li>How to Make Your House a Smart Home</li>
                <li>How to Make Zero Waste Living in an Apartment</li>
                <li>
                  Basic Real Estate Terms You Should Know Before Buying a Flat
                </li>
                <li>Complete Guide for Shifting Your House</li>
                <li>To Live in the City or Away From It?</li>
                <li>
                  Why Luxury Villas in Bangalore are Better than 5 Star Hotels?
                </li>
                <li>Should I buy a house or rent a house?</li>
                <li>
                  Real Estate Investments &#8211; An Exceptional Way to Maximise
                  Profits
                </li>
                <li>Experience the luxury that Bangalore has to offer</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default csrDetails
