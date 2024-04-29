import Image from 'next/image'
import Link from 'next/link'
import { Col } from 'react-bootstrap'

const Leadership = ({ leadershipDetails }) => {
  return (
    <div className="p-4">
      <Image
        src={leadershipDetails.imageUrl}
        alt={leadershipDetails.alt}
        width={116}
        height={160}
        className="ms-4"
      />
      <Link href="/about" className="link">
        <div className="leader-bg d-flex flex-column justify-content-center">
          <div className="d-flex flex-column m-5">
            <p className="leader-name mb-1 mt-5">{leadershipDetails.name}</p>
            <p className="fs-6 mt-0">{leadershipDetails.post}</p>
            <p>{leadershipDetails.description}</p>
          </div>
          <div className="d-flex mt-auto ps-5">
            <p className="">Know More</p>
            <Image
              src={leadershipDetails.arrowUrl}
              alt="arrow"
              height={50}
              width={50}
              className="align-self-end ms-auto arrow-image"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Leadership
