import Image from 'next/image'

const Card = ({ cardItems }) => {
  const { imageUrl, title, description } = cardItems
  return (
    <div className="card custom-card border-0" style={{ width: '28rem' }}>
      <Image
        src={imageUrl}
        width={1000}
        height={500}
        layout="responsive"
        className="card-img-top rounded-0"
        alt={title}
      />
      <div className="card-body d-flex flex-column align-items-start ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href="#"
          className="btn btn-primary rounded-0 enquire-btn border-0 mt-auto"
        >
          Continue reading
        </a>
      </div>
    </div>
  )
}

export default Card
