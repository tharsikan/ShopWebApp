import CommentSection from '../Listing/comment-section';
import SimilarProduct from '../Listing/similar-product';
import PromotedPost from '../Topic/promoted-post';
import PollCard from './poll-card';

const PollsPage = () => {
  // This will be 9 Thread Single Page: polls page
  return (
    <section>
      <PollCard />
      <PromotedPost />
      <CommentSection />
      <SimilarProduct />
    </section>
  );
};

export default PollsPage;
