import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Jumbo from "../../common/Jumbotron/Jumbo";

import Tabs from "../../common/Tabs/Tabs";




const tabs = [
  {
    to: "/que/settings",
    icon: "/assets/vectors/transactions/purchases.svg",
    label: "Settings",
  },
  {
    to: "/que/rules",
    icon: "/assets/vectors/transactions/orders.svg",
    label: "Rules",
  },
  {
    to: "/que/posts",
    icon: "/assets/vectors/transactions/offers.svg",
    label: "Posts",
  },
  {
    to: "/que/insights",
    icon: "/assets/vectors/transactions/earnings.svg",
    label: "Insights",
  },
  {
    to: "/que/mods",
    icon: "/assets/vectors/transactions/my-bill.svg",
    label: "Moderators",
  },
  {
    to: "/que/ban",
    icon: "/assets/vectors/transactions/manage-listings.svg",
    label: "Banned",
  },
  {
    to: "/que/approve",
    icon: "/assets/vectors/transactions/manage-listings.svg",
    label: "Approved",
  },
];

const ModLayout = () => {
  return (
    <>
      {/* <Navigate replace to="/policy/terms" /> */}
      <Jumbo
        title="Mod Que:C/TalkBass"
        des="Control and manage your community"
      />
      <Tabs tabsData={tabs} />

      <Outlet />
    </>
  );
};

export default ModLayout;
