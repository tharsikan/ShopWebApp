import "./Post.css";
import Listing from "./Listing/listing";
import NewGear from "./New-Gear/new-gear";
import Poll from "./Poll/poll";
import Topic from "./Topic/topic";

const Post = ({ el, idx }: { el: any; idx: number }) => {
  if (el.type === "prod-gear") return <NewGear el={el} idx={idx} />;
  if (el.type === "prod-sale") return <Listing el={el} idx={idx} />;
  if (el.type === "prod-poll") return <Poll el={el} idx={idx} />;
  if (el.type === "prod-topic") return <Topic el={el} idx={idx} />;
  return null;
};

export default Post;
