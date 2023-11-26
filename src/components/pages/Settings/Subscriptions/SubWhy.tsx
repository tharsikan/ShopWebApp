import React from 'react'

const SubWhy = () => {
    return (
      <React.Fragment>
        <div className="mt-10 mb-4 text-center font-semibold text-2xl">
          Why go Premium?
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Mods Get Paid</div>
            <div className="font-medium mt-1 text-xs">
              Get PAID growing your own Communities as a MOD.
            </div>
          </div>
          <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Reduced Fees</div>
            <div className="font-medium mt-1 text-xs">
              Lower Fee rates on sold items, up to 4%!
            </div>
          </div>
          <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Listings are Boosted</div>
            <div className="font-medium mt-1 text-xs">
              All listings are promoted to related feeds!
            </div>
          </div>
          <div className="bg-white border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Unlimited Access</div>
            <div className="font-medium mt-1 text-xs">
              You can access all reviews, gear, etc! NO Ads.
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 text-center font-semibold text-2xl">
          Earn Money Building Communities
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          <div className="bg-yellow-500  border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Bronze</div>
            <div className="flex justify-center">
              <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
                $100/month
              </div>
            </div>

            <ul className="text-xs text-start list-disc pl-4">
              <li className="mb-1">5k+ Elite Members</li>
              <li className="mb-1">Enjoy Premium Exposure</li>
              <li className="mb-1">Special Member Postings</li>
            </ul>
          </div>
          <div className="bg-stone-300 border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Silver</div>
            <div className="flex justify-center">
              <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
                $300/month
              </div>
            </div>

            <ul className="text-xs text-start list-disc pl-4">
              <li className="mb-1">15k+ Elite Members</li>
              <li className="mb-1">Enjoy Premium Exposure</li>
              <li className="mb-1">Allow Community Donations</li>
            </ul>
          </div>
          <div className="bg-amber-400 border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Gold</div>
            <div className="flex justify-center">
              <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
                $600/month
              </div>
            </div>

            <ul className="text-xs text-start list-disc pl-4">
              <li className="mb-1">30k+ Elite Members</li>
              <li className="mb-1">Enjoy Premium Exposure</li>
              <li className="mb-1">Allow Community Donations</li>
            </ul>
          </div>
          <div className="bg-zinc-400 border border-solid border-accentGray-600 p-4 text-center rounded-lg">
            <div className="font-semibold">Platinum</div>
            <div className="flex justify-center">
              <div className="bg-accentGray-400 py-3 px-4 text-accentGray-700 my-3 rounded-lg">
                $1000/month
              </div>
            </div>

            <ul className="text-xs text-start list-disc pl-4">
              <li className="mb-1">50k+ Elite Members</li>
              <li className="mb-1">Enjoy Premium Exposure</li>
              <li className="mb-1">Allow Community Donations</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
}

export default SubWhy