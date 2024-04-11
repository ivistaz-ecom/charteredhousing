import Blogs from '@components/Blogs'
import { blogsMenu } from '@utils/menu'
import { Container } from 'react-bootstrap'

const page = () => {
  return (
    <>
      <section className="mb-5">
        <div>
          <img src="/bannerImage/Banner 5.png" className="w-100" />
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
