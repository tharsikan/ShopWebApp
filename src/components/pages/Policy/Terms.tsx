import React from 'react'
import { content, dispute, membership, preamble, preamble2, terms } from './PolicyData/terms';

const Terms = () => {
  return (
    <div className=" mt-4  mx-auto  leading-relaxed">
      <h3 className="text-lg">Terms and Conditions</h3>
      <h3 className="text-sm underline">Preamble</h3>
      <p className="pb-2 text-xs">{preamble}</p>
      <p className="text-sm font-bold mb-2">{preamble2}</p>
      <h3 className="text-sm underline font-bold">1. Membership</h3>
      {membership.map((_) => (
        <p className="pb-1 text-xs">{_}</p>
      ))}
      <h3 className="text-sm underline font-bold">2. Content</h3>
      {content.map((_) => (
        <p className="pb-1 text-xs">{_}</p>
      ))}
      <h3 className="text-sm underline font-bold">
        3. Disputes, Arbitration, Class Waiver, Waiver of Claims and Venue
      </h3>
      {dispute.map((_) => (
        <p className="pb-1 text-xs">{_}</p>
      ))}
      {terms.map((_) => (
        <div>
          <h3 className="text-sm underline font-bold">{_.title}</h3>
          <p className="pb-1 text-xs">{_.terms}</p>
        </div>
      ))}
      <p>Effective Date: Dec 5, 2023</p>
      <p>Updated: November 3, 2023</p>
    </div>
  );
}

export default Terms