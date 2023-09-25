import { TOP_BANNER_SLIDER } from "./_components/config";
import ServiceList from "./_components/service-list";
import TopBanner from "./_components/top-banner";

export default async function Page() {
  return (
    <>
      <TopBanner carouselData={TOP_BANNER_SLIDER} />
      <ServiceList />
    </>
  )
}
