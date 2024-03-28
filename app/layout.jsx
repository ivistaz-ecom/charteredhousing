import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Scroller from '@components/Scroller'

export const metadata = {
  title: 'Chartered Housing',
  description:
    'The Chartered group was established in 1983 with Finance, Hire Purchase and Leasing as its core businesses',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossorigin="anonymous"
          ></script>
        </div>
        <main>
          <Header />
          {children}
          <Scroller />
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
