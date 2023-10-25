import Footer from '@components/common/footer'
import Header from './_components/header'

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
