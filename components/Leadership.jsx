import Image from 'next/image'
import { Col } from 'react-bootstrap'

const Leadership = ({ leadershipDetails }) => {
  return (
    <Col>
      <div className="p-4">
        <Image
          src={leadershipDetails.imageUrl}
          alt={leadershipDetails.alt}
          width={116}
          height={160}
          className="ms-4"
        />
        <div className="leader-bg p-5">
          <div className="mt-5 pt-4">
            <p className="leader-name mb-1">{leadershipDetails.name}</p>
            <p className="fs-6 mt-0">{leadershipDetails.post}</p>
            <p>{leadershipDetails.description}</p>
            <p className="mt-auto">know more</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Leadership
