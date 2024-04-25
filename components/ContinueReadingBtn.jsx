'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

const ContinueReadingBtn = ({ id }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`csr-activities/${id}`)
  }
  return (
    <Button
      onClick={handleClick}
      variant="btn btn-primary"
      className="rounded-0 enquire-btn border-0 mt-auto"
    >
      Know More
    </Button>
  )
}

export default ContinueReadingBtn
