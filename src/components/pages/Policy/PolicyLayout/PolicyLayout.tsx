import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Jumbo from "../../../common/Jumbotron/Jumbo";

import Tabs from "../../../common/Tabs/Tabs";

const tabs = [
  {
    to: "/policy/terms",
    icon: "/assets/vectors/transactions/purchases.svg",
    label: "Terms",
  },
  {
    to: "/policy/privacy",
    icon: "/assets/vectors/transactions/orders.svg",
    label: "Privacy",
  },
  {
    to: "/policy/payout",
    icon: "/assets/vectors/transactions/offers.svg",
    label: "Payouts",
  },
  {
    to: "/policy/billing",
    icon: "/assets/vectors/transactions/earnings.svg",
    label: "Billing",
  },
  {
    to: "/policy/content",
    icon: "/assets/vectors/transactions/my-bill.svg",
    label: "Content",
  },
  {
    to: "/policy/agreement",
    icon: "/assets/vectors/transactions/manage-listings.svg",
    label: "User Agreement",
  },
];

const PolicyLayout = () => {
     
  return (
    <>
        {/* <Navigate replace to="/policy/terms" /> */}
      <Jumbo title="Policy" des="Checkout our the Terms and Conditions" />
      <Tabs tabsData={tabs} />

      <Outlet />
    </>
  );
};

export default PolicyLayout;
