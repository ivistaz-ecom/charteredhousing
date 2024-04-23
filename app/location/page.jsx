import Blogs from '@components/Blogs'
import Seo from '@components/Seo'
import { blogsMenu } from '@utils/menu'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

const page = () => {
  const pageTitle = 'Chartered Housing'
  const pageDescription =
    'apartments in bangalore, villas in bangalore, Plots in Bangalore'
  const MetaImage = '/bannerImage/LocationBanner.png'
  const url = 'https://www.charteredhousing.com/'

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        MetaImage={MetaImage}
        url={url}
      />
      <section className="mb-5">
        <div>
          <Image
            src="/bannerImage/LocationBanner.png"
            className="responsive-image"
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
