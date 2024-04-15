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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fjalla+One&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Trirong:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://db.onlinewebfonts.com/c/0a6ee448d1bd65c56f6cf256a7c6f20a?family=Bahnschrift"
          rel="stylesheet"
        />
        <script
          rel="preload"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
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
