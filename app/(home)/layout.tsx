import Header from '@components/common/header'
import Navbar from '@components/common/theme/navbar'

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='section-after-sticky'>
        <Navbar elevation={0} border={1} />
      </div>
      {children}
    </>
  )
}
