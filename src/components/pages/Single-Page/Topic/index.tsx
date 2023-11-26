import React from 'react';
import CommentSection from '../Listing/comment-section';
import SimilarProduct from '../Listing/similar-product';
import TopicCard from './topic-card';
import PromotedPost from './promoted-post';

const TopicPage = () => {
  // This will be 9 Thread Single Page: topics page
  return (
    <section>
      <TopicCard />
      <PromotedPost />
      <CommentSection />
      <SimilarProduct />
    </section>
  );
};

export default TopicPage;
