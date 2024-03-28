'use client'

import { Button } from 'react-bootstrap'
import Image from 'next/image'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const Scroller = () => {
  return (
    <div className="text-center mt-4 mb-5">
      <Button variant="btn" onClick={scrollToTop}>
        <Image src="/logo/Group 49906.svg" width={50} height={50} />
      </Button>
    </div>
  )
}

export default Scroller
