'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

const ContinueReadingBtn = ({ slug }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`${slug}`)
  }
  return (
    <Button
      onClick={handleClick}
      className="rounded-0 border-0 enquire-btn mt-4"
    >
      Read More
    </Button>
  )
}

export default ContinueReadingBtn
