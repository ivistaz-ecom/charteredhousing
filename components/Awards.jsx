import { Col } from 'react-bootstrap'
import Image from 'next/image'

const Awards = ({ awardsDetails }) => {
  const { imageUrl, title, description, borderStyle } = awardsDetails
  return (
    <li className={`d-flex flex-column align-items-center p-3 ${borderStyle}`}>
      <Image src={imageUrl} alt={title} width={100} height={100} />
      <h6 className="text-center mt-4">{title}</h6>
      <p className="text-center">{description}</p>
    </li>
  )
}

export default Awards
