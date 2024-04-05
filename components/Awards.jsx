import { Col } from 'react-bootstrap'
import Image from 'next/image'

const Awards = ({ awardsDetails }) => {
  const { imageUrl, title, description, borderStyle } = awardsDetails
  return (
    <Col className={`d-flex flex-column align-items-center ${borderStyle}`}>
      <Image src={imageUrl} alt={title} width={100} height={100} />
      <h6 className="text-center mt-4">{title}</h6>
      <p className="text-center">{description}</p>
    </Col>
  )
}

export default Awards
