import React from "react";

import Categories from "./Categories";
import Feeds from "./Feeds";
import Posts from "./Posts";
import User from "./User";

const Home = () => {
  /// ADD Logic for 2 different Homepages Based on User being logged in

  /// Guest Homepage is Currently here, spacing is good. Follow the same spacing.

  /// ADD Member SignedIN Homepage(1-2. Homepage) with logic once user log's in

  return (
    <React.Fragment>
      <User />
      <Categories />
      <Feeds />
      <Posts />
    </React.Fragment>
  );
};

export default Home;

