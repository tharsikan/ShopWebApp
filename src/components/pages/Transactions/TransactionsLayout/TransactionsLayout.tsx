import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Jumbo from "../../../common/Jumbotron/Jumbo";

import Tabs from "../../../common/Tabs/Tabs";

const tabs = [
  {
    to: "/transactions/purchases",
    icon: "/assets/vectors/transactions/purchases.svg",
    label: "Purchases",
  },
  {
    to: "/transactions/orders",
    icon: "/assets/vectors/transactions/orders.svg",
    label: "Orders",
  },
  {
    to: "/transactions/offers",
    icon: "/assets/vectors/transactions/offers.svg",
    label: "Offers",
  },
  {
    to: "/transactions/earnings",
    icon: "/assets/vectors/transactions/earnings.svg",
    label: "Earnings",
  },
  {
    to: "/transactions/my-bill",
    icon: "/assets/vectors/transactions/my-bill.svg",
    label: "My Bill",
  },
  {
    to: "/transactions/manage-listings",
    icon: "/assets/vectors/transactions/manage-listings.svg",
    label: "Manage Listings",
  },
];

const TransactionsLayout = () => {

 
  return (
    <>
      {/* <Navigate replace to="/transactions/purchases" /> */}
      <Jumbo title="Transactions" des="Find all your busniess operations" />
      <Tabs tabsData={tabs} />
      <Outlet />
    </>
  );
};

export default TransactionsLayout;
