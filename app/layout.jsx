import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
  title: 'Chartered Housing',
  description:
    'The Chartered group was established in 1983 with Finance, Hire Purchase and Leasing as its core businesses',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
