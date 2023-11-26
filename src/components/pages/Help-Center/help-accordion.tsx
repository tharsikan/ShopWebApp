import { Icon } from "@iconify/react";
import * as Accordion from "@radix-ui/react-accordion";
import { HTMLAttributes, useEffect, useState } from "react";

interface HelpProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
}

export default function FaqAccordion({ type }: HelpProps) {
  
  const action = () => {
    switch (type) {
      case "buy":
        return buyData;
        break;
      case "sell":
        return sellData;
        break;
      case "comm":
        return commData;
        break;
      default:
        return buyData;
    }
  };
  return (
    <section>
      <p className="text-xl font-semibold text-center">
        Frequently Asked Questions
      </p>
      <Accordion.Root
        type="single"
        className="lg:space-y-4 space-y-2 my-6"
        collapsible
      >
        {action().map((_, idx) => (
          <Accordion.Item
            value={idx.toString()}
            role="button"
            className="lg:p-4 p-2 bg-white rounded-lg text-sm text-left border-b last:border-0 border-slate-200"
            key={_.ques}
          >
            <Accordion.Trigger asChild className="group">
              <div className="flex items-center justify-between">
                {_.ques}
                <Icon
                  icon={"iconamoon:arrow-up-2-light"}
                  className="w-8 text-xl transition-all rotate-180 group-aria-expanded:rotate-0"
                />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className="pt-3 mt-3 border-t border-t-black/5">
              {_.ans}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

const buyData = [
  {
    ques: "How to make an offer?",
    ans: "Select the Make an Offer button on the listing. Enter your offer amount. Include a message to the seller if you would like. Select Submit Offer.",
  },
  {
    ques: " What is my protection as a buyer?",
    ans: "All purchases on the site are backed by our Muzfi Buyer Protection. If anything arrives damaged or not as described, you just need to contact the seller or Muzfi within 7 days of delivery with photos and/or videos of the issues. We always recommend contacting the seller first, as the majority of issues are resolved between buyers and sellers. ",
  },
  {
    ques: " What are the steps of getting a refund/return started?",
    ans: "Message the seller on Muzfi with documentation (e.g. photos, video) of any issues. Request a refund on the order. Wait 24 Hours. Once approved, ship the item back to the seller. Once the item is back in the seller's possession, your refund should be initiated in 48 hours. ",
  },
  {
    ques: " Who is responsible for return shipping costs?",
    ans: "If the item you purchased arrived damaged or not as described, and you reported the issues to the seller or Muzfi within 7 days of delivery, the seller would be responsible for the return shipping costs. Otherwise the buyer would be responsible for coordinating the return.",
  },
  {
    ques: " How do I cancel an order?",
    ans: "You can complete order cancelation on the Muzfi App by heading to your Purchases/Orders tab, locating the specific order, and following the steps. First Contact the seller via the messages before canceling the order. ",
  },
  {
    ques: " How to contact a seller?",
    ans: "Select the Message Seller button on the individual listing to start a message thread between you and the seller. The majority of sellers on Muzfi respond to messages within 24 hours.",
  },
];

const sellData = [
  {
    ques: "How do returns work for sellers on Muzfi?",
    ans: "If the item arrived not as described, it is on the seller to supply a return shipping label and/or file a claim with the shipping carrier. If the buyer is wanting to return the item because they simply do not like it, then the buyer must supply their own return shipping label, and once the item has been returned to you, the refund must be completed within 48 hours.",
  },
  {
    ques: "What fees will I pay for selling on Muzfi?",
    ans: "There is a 5% selling fee for every item sold on Muzfi. There are no fees for creating a new listing or removing a listing if it has not sold. This fee is assessed off of the total sale amount (including shipping). Regardless of the buyer's payment method used to purchase, all Muzfi orders will incur this payment processing fee.",
  },
  {
    ques: "I sold an item, what's next?",
    ans: "You want to make sure you have a bank account on file, then gather the weight & dimensions of the packaged item and get a shipping label. Once the item has shipped, be sure to enter the tracking information. We’ll then notify you once payment has been sent to your bank account. ",
  },
  {
    ques: "How to connect a bank account with Muzfi Payments?",
    ans: "You can link your bank with instant verification (recommended) through Plaid. If Plaid doesn’t support your bank or you don't want to login to your bank via Plaid, you can connect your bank account with manual verification.",
  },
  {
    ques: "What should I do if a buyer reports issues on an order?",
    ans: "If the buyer has reached out within the days allotted for a return, you are expected to accept their request under the terms of your policy. If the buyer has requested a return outside of the allotted time to do so, let them know and politely decline their request.",
  },
  {
    ques: "How do I list my item on Muzfi?",
    ans: "On Muzfi, you can list your music gear in a matter of minutes once you select the Sell Gear icon New Post button, or the Sell button on the Muzfi mobile app. Listing your gear will get it in front of an audience of millions of eager, trustworthy music creators.",
  },
  
];

const commData = [
  {
    ques: "Can I change my username?",
    ans: "No, once a username is finalized, it can’t be changed in any way, including its capitalization.",
  },
  {
    ques: "Recovering a lost or forgotten username?",
    ans: "If you’ve added an email address to your Muzfi account, you can request an email to recover your username and log in. Unfortunately, if you haven’t added an email address to your account, you can’t look up your username. ",
  },
  {
    ques: "How do I log in to Muzfi I forgot my password?",
    ans: "If you’ve added an email address to your Muzfi account, you can request an email to reset your password and log in. Unfortunately, if you haven’t added an email address to your account, you’re locked out until you can remember your password.",
  },
  {
    ques: "What are MuzPoints?",
    ans: "On Muzfi, your karma is a reflection of how much your contributions mean to the community. How much MuzPoints someone has is publicly displayed on their profile. ",
  },
  {
    ques: " What is a Muzfi Premium subscription?",
    ans: "Muzfi Premium is a subscription that auto-renews each month or year. Muzfi Premium members use Muzfi ad-free, exclusive gear reviews, custom gear rooms, and access to all gear rooms. ",
  },
];