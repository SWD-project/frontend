import Navbar from '@components/common/theme/navbar'
import Header from '@components/common/header'
import Footer from '@components/common/footer'
import Link from 'next/link'

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='section-after-sticky'>
        <Navbar elevation={0} border={1} />
      </div>
      <div
        style={{
          maxWidth: 1376,
          margin: 'auto'
        }}
      >
        <Link href='/course/details/123'>go to details</Link>
        {children}
      </div>
      <Footer />
    </>
  )
}
