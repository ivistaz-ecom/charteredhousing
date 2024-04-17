import Image from 'next/image'

const Leadership = ({ leadershipDetails }) => {
  return (
    <>
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
            <p className="mb-1 leader-name">{leadershipDetails.name}</p>
            <p className="fs-6">{leadershipDetails.post}</p>
            <p>{leadershipDetails.description}</p>
            <p>know more</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leadership
