import { Outlet } from "react-router-dom";
import Category from "../category";
import Banner from "./banner";

export default function CommunityPage() {
  return (
    <section>
      <Banner />
      <Category category={category} post />
      <Outlet />
    </section>
  );
}
const category = [
  {
    title: "Posts",
    icon: "tabler:category",
    link: "/browse/single/posts",
  },
  { title: "Rules", icon: "pajamas:push-rules", link: "/browse/single/rules" },
  {
    title: "Mods",
    icon: "fluent-mdl2:party-leader",
    link: "/browse/single/mods",
  },
];

const feedTypes = [
  {
    icon: "/assets/vectors/home/add.svg",
    label: "New",
  },
  {
    icon: "/assets/vectors/home/hot.svg",
    label: "Hot",
  },
  {
    icon: "/assets/vectors/home/topics.svg",
    label: "topics",
  },
  {
    icon: "/assets/vectors/home/for-sale.svg",
    label: "Best",
  },
  {
    icon: "/assets/vectors/home/new-gear.svg",
    label: "New Gear",
  },
  {
    icon: "/assets/vectors/home/polls.svg",
    label: "Polls",
  },
];
