import Image from 'next/image'
import ContinueReadingBtn from './ContinueReadingBtn'

const Card = ({ cardItems }) => {
  const { id, imageUrl, title, description, alt } = cardItems
  return (
    <div className="card custom-card border-0" style={{ width: '28rem' }}>
      <Image
        src={imageUrl}
        width={1000}
        height={500}
        layout="responsive"
        className="card-img-top rounded-0"
        alt={alt}
      />
      <div className="card-body d-flex flex-column align-items-start ">
        <h5 className="card-title mb-3">{title}</h5>
        <p className="card-text">{description}</p>

        <ContinueReadingBtn id={id} />
      </div>
    </div>
  )
}

export default Card
