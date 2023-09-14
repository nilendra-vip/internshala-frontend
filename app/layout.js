import Wrapper from '@/components/wrapper/Wrapper'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export const metadata = {
  title: 'Internshala App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>
          <Link href='/' className='btn btn-success m-3'>Ghar</Link>
          {children}</Wrapper>
      </body>
    </html>
  )
}
