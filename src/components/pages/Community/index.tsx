import React from "react";

import CommunityItems from "./CommunityItems";
import Wrapper from "../../../layouts/MainLayout/wrapper";
import Categories from "../Home/Categories";
import Category from "./category";
import Filter from "./filter";

const Community = () => {
  // ADD Communities Page(2. Browse Communities) Here ----- This is the "Browse" Tab on Left Panel

  // Once a Specific Communitity is Clicked, User will be redirected to Community Page (Single)

  return (
    <div>
      <Category category={category} />
      <Wrapper>
        <Categories />
         <Filter /> 
        <CommunityItems />
      </Wrapper>
    </div>
  );
};

export default Community;

const category = [
  { title: "Search By Category", icon: "tabler:category", active: true },
  { title: "Top Communities", icon: "eva:flash-outline" },

];
