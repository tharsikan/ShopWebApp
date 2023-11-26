import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Community from "./components/pages/Community";
import Listing from "./components/pages/Create-Post/Listing";
import NewGear from "./components/pages/Create-Post/NewGear";
import Polls from "./components/pages/Create-Post/Polls";
import Topic from "./components/pages/Create-Post/Topic";
import Home from "./components/pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import TabsWrapper from "./layouts/MainLayout/tabs-wrapper";

import About from "./components/pages/About";
import Ads from "./components/pages/Advertise";
import Cart from "./components/pages/Cart";
import CheckoutLayout from "./components/pages/Checkout";
import CreateCommunity from "./components/pages/Community/Create-Community";

import GearCatalog from "./components/pages/Gear-Catalog";
import Help from "./components/pages/Help-Center";
import InviteUsers from "./components/pages/Invite-Users";
import ForSale from "./components/pages/Market";
import Messages from "./components/pages/Messages";
import MyGearRoom from "./components/pages/My-Gear-Room";
import Newsletter from "./components/pages/Newsletter";
import Notifications from "./components/pages/Notifications";
import Premium from "./components/pages/Premium";
import Account from "./components/pages/Settings/Account";
import Chat from "./components/pages/Settings/Chat";
import NotificationsSettings from "./components/pages/Settings/Notifications";
import Profile from "./components/pages/Settings/Profile";
import Safety from "./components/pages/Settings/Safety";
import SettingsLayout from "./components/pages/Settings/SettingsLayout";
import Subscriptions from "./components/pages/Settings/Subscriptions";
import ListingPage from "./components/pages/Single-Page/Listing";
import NewGearPage from "./components/pages/Single-Page/New-Gear";
import PollsPage from "./components/pages/Single-Page/Poll";
import TopicPage from "./components/pages/Single-Page/Topic";
import SingleGear from "./components/pages/SingleGear/SingleGear";
// import Subscription from "./components/pages/Subscription";
import Earnings from "./components/pages/Transactions/Earnings";
import ManageListings from "./components/pages/Transactions/ManageListings";
import MyBill from "./components/pages/Transactions/MyBill";
import Orders from "./components/pages/Transactions/Orders";
import Purchases from "./components/pages/Transactions/Purchases";
import TransactionsLayout from "./components/pages/Transactions/TransactionsLayout";
import MyCommunities from "./components/pages/User-Pages/User-Communities/Communities";

import { Confirmation } from "./components/pages/Checkout/confirmation";
import { Info } from "./components/pages/Checkout/info";
import { Payment } from "./components/pages/Checkout/payment";
import { Shipping } from "./components/pages/Checkout/shipping";

// import Offer from "./components/pages/Market/offer";
// import ModQue from "./components/pages/Mod-Que";

import ComingSoon from "./components/common/Error/ComingSoon";
import Us from "./components/pages/Comp";
import Contact from "./components/pages/Contact";
import Donate from "./components/pages/Donate";
import ModLayout from "./components/pages/Mod-Que/ModLayout";
import { Approved } from "./components/pages/Mod-Que/approved";
import { Banned } from "./components/pages/Mod-Que/banned";
import { Insights } from "./components/pages/Mod-Que/insights";
import { Moderators } from "./components/pages/Mod-Que/moderators";
import { Posts } from "./components/pages/Mod-Que/posts";
import { Rules } from "./components/pages/Mod-Que/rules";
import { Setting } from "./components/pages/Mod-Que/setting";
import PolicyLayout from "./components/pages/Policy/PolicyLayout";
import Terms from "./components/pages/Policy/Terms";
import { SearchCommunities } from "./components/pages/Search/communities";
import SearchLayout from "./components/pages/Search/layout";
// @ts-ignore
import CommunityPage from "./components/pages/Community/Community-Page";
import { CommunityMods } from "./components/pages/Community/Community-Page/community-mods";
import { CommunityPost } from "./components/pages/Community/Community-Page/community-post";
import { CommunityRules } from "./components/pages/Community/Community-Page/community-rules";
import { SearchPeople } from "./components/pages/Search/people";
import { SearchPosts } from "./components/pages/Search/post";
import { SearchShop } from "./components/pages/Search/shop";
import OfferSelector from "./components/pages/Transactions/Offers/OfferSelector";
import OwnedCommunities from "./components/pages/User-Pages/User-Communities/Owned";
import UserReviews from "./components/pages/User-Pages/User-Reviews";
import UserStore from "./components/pages/User-Pages/User-Store";
import UserThreads from "./components/pages/User-Pages/User-Threads";
import UserWatchlist from "./components/pages/User-Pages/User-Watchlist";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path='/auth' element={<Auth isModalActive={hidden.value} type={type.value} />}/> */}
          <Route path="" element={<Home />} />
          <Route path="/single/listing" element={<ListingPage />} />
          {/* <Route path="/single/listing/deal" element={<Offer />} /> */}
          <Route path="/single/new-gear" element={<NewGearPage />} />
          <Route path="/single/poll" element={<PollsPage />} />
          <Route path="/single/topic" element={<TopicPage />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/browse" element={<Community />} />
          <Route path="/browse/single" element={<CommunityPage />}>
            <Route index element={<CommunityPost />} />
            <Route path="/browse/single/posts" element={<CommunityPost />} />
            <Route path="/browse/single/rules" element={<CommunityRules />} />
            <Route path="/browse/single/mods" element={<CommunityMods />} />
          </Route>
          <Route path="/browse/build" element={<CreateCommunity />} />
          <Route path="/invite-user" element={<InviteUsers />} />
          <Route path="/user/gear" element={<MyGearRoom />} />
          <Route path="/user/for-sale" element={<UserStore />} />
          <Route path="/user/communities" element={<MyCommunities />} />
          <Route path="/user/communities/own" element={<OwnedCommunities />} />
          <Route path="/user/threads" element={<UserThreads />} />
          <Route path="/user/watchlist" element={<UserWatchlist />} />
          <Route path="/user/reviews" element={<UserReviews />} />
          <Route path="/gear-catalog" element={<GearCatalog />} />
          <Route path="/single-gear" element={<SingleGear />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/why" element={<Us />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/create" element={<TabsWrapper />}>
            <Route index path="/create/listing" element={<Listing />} />
            <Route path="/create/topic" element={<Topic />} />
            <Route path="/create/new-gear" element={<NewGear />} />
            <Route path="/create/polls" element={<Polls />} />
          </Route>
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/checkout" element={<CheckoutLayout />}>
            <Route index element={<Info />} />
            <Route path="info" element={<Info />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
          <Route path="/search" element={<SearchLayout />}>
            <Route index path="shop" element={<SearchShop />} />
            <Route path="posts" element={<SearchPosts />} />
            <Route path="communities" element={<SearchCommunities />} />
            <Route
              path="gear-catalog"
              element={<GearCatalog className="[&_.jumbotron]:hidden" />}
            />
            <Route path="people" element={<SearchPeople />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/que" element={<ModLayout />}>
            <Route index element={<Setting />} />
            <Route path="settings" element={<Setting />} />
            <Route path="rules" element={<Rules />} />
            <Route path="posts" element={<Posts />} />
            <Route path="insights" element={<Insights />} />
            <Route path="mods" element={<Moderators />} />
            <Route path="ban" element={<Banned />} />
            <Route path="approve" element={<Approved />} />
          </Route>
          <Route path="/settings" element={<SettingsLayout />}>
            <Route path="account" element={<Account />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<NotificationsSettings />} />
            <Route path="chat" element={<Chat />} />
            <Route path="safety" element={<Safety />} />
          </Route>
          <Route path="/transactions" element={<TransactionsLayout />}>
            <Route path="purchases" element={<Purchases />} />
            <Route path="orders" element={<Orders />} />
            <Route path="offers" element={<OfferSelector />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="my-bill" element={<MyBill />} />
            <Route path="manage-listings" element={<ManageListings />} />
          </Route>
          <Route path="/policy" element={<PolicyLayout />}>
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<ComingSoon />} />
            <Route path="payout" element={<ComingSoon />} />
            <Route path="billing" element={<ComingSoon />} />
            <Route path="content" element={<ComingSoon />} />
            <Route path="agreement" element={<ComingSoon />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
