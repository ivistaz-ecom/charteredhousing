import Blogs from '@components/Blogs'
import { blogsMenu } from '@utils/menu'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/LocationBanner.png"
            layout="responsive"
            width={1000}
            height={500}
          />
        </div>
      </section>
      <Container>
        {blogsMenu.map((item) => (
          <Blogs key={item.id} blogsItem={item} />
        ))}
      </Container>
    </>
  )
}

export default page
