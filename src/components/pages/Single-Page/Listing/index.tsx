import AboutTabs from './about-tabs';
import Carousel from './carousel';
import CommentSection from './comment-section';
import Details from './details';
import PaymentSection from './payment-section';
import SimilarProduct from './similar-product';
export default function ListingPage() {
  // This page will be 10. User Gear Page !! Not 9. Threads Etc

  return (
    <section>
      <div className='grid-cols-2 gap-6 lg:grid'>
        <Carousel />
        <Details isListing />
      </div>
      <AboutTabs isListing />
      <PaymentSection />
      <CommentSection />
      <SimilarProduct />
    </section>
  );
}
