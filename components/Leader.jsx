import Image from 'next/image'
import React from 'react'

const Leader = ({ leader }) => {
  const {
    name,
    post,
    imageUrl,
    alt,
    heading1,
    description1,
    heading2,
    description2,
  } = leader
  return (
    <div className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-5">
      <div className="profile-con me-5">
        <Image src={imageUrl} alt={alt} width={265} height={355} />
        <p className="leader-name mb-1 mt-3">{name}</p>
        <p className="fs-6 mt-0">{post}</p>
      </div>
      <div className="w-75 ms-lg-5 px-lg-5">
        <h4 className="mb-4 w-75">{heading1}</h4>
        <p className="mb-4">{description1}</p>
        <h6 className="mb-4 w-75">{heading2}</h6>
        <p>{description2}</p>
      </div>
    </div>
  )
}

export default Leader
