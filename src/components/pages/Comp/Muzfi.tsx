import React from 'react'
import GradientBtn from '../../buttons/GradientBtn';

const Muzfi = () => {
  return (
    <div className="bg-white border border-solid border-accentGray-600 py-10 px-7 text-center rounded-lg">
      <div className="ring-2 rounded ring-slate-500 bg-accentYellow-500 ">
        <div className="text-xl font-semibold ">Muzfi</div>
        <div className="text-xs">Best Musician Experience</div>
      </div>

      <div className="mt-6 text-3xl font-bold text-primary-gradient">
        Everything
      </div>
      <div className="text-accentGray-700 font-semibold">Do Everything!</div>
      <div className="my-6 flex justify-center">
        <GradientBtn className="w-full" label={`Sign Up Today!`} />
      </div>
      <div className="font-semibold">Social Community Marketplace</div>

      <div className="mt-3 font-semibold text-xs">
        <div className="font-semibold my-2"> Instrument Marketplace</div>
        <div className="font-semibold my-2">Seller Fee 5%</div>
        <div className="font-semibold my-2">Join Your Communities</div>
        <div className="font-semibold my-2">
          Create and Grow Your Own Communities
        </div>
        <div className="font-semibold my-2">Build Virtual Gear Collection</div>
        <div className="font-semibold my-2">Access Gear Catalog</div>
        <div className="font-semibold my-2">Access Unlimited Reviews</div>
        <div className="font-semibold my-2">Find Gear Trends</div>
        <div className="font-semibold my-2">Access Articles</div>
        <div className="font-semibold my-2">Start Your OWN Threads</div>
        <div className="font-semibold my-2">Comment/Like and Interact</div>

        <div className="font-semibold my-2">Make Offers</div>
        <div className="font-semibold my-2">24/7 Support</div>
      </div>
    </div>
  );
}

export default Muzfi