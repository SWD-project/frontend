import Navbar from '@components/common/theme/navbar'
import ServiceList from "app/(home)/_components/service-list";
import TopBanner from './_components/top-banner';
import { TOP_BANNER_SLIDER } from './_components/config';
import Header from '@components/common/header';
import Footer from '@components/common/footer';

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className='section-after-sticky'>
        <Navbar elevation={0} border={1} />
      </div>
      <TopBanner carouselData={TOP_BANNER_SLIDER}/>
      <ServiceList/>
      <div
        style={{
          maxWidth: 1376,
          margin: 'auto'
        }}
      >
        {children}

      </div>
      <Footer/>
    </>
  )
}
