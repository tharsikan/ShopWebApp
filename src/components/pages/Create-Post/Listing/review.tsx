import { Icon } from '@iconify/react';
import YellowBtn from '../../../buttons/YellowBtn/YellowBtn';
import TableWrapper from './table-wrapper';

export default function Review() {
  return (
    <section>
      <div className='flex items-center text-sm gap-2.5'>
        <p>Your Listings</p>{' '}
        <Icon icon={'ri:arrow-right-s-line'} className='text-xs' />
        <p>Fender Jazz Bass 2010</p>
      </div>
      <div className='flex items-center justify-between my-4'>
        <p className='font-semibold  mb-2.5'>Pricing </p>
        <YellowBtn label={'Publish'} short />
      </div>
      <TableWrapper label='Product Info'>
        <p className='text-sm font-semibold mb-2.5'>Your Gear</p>
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          {yourGear.map((_) => (
            <>
              <p className='text-xs font-semibold'>{Object.keys(_)}</p>
              <p className='text-xs font-medium '>{Object.values(_)}</p>
            </>
          ))}
        </div>
      </TableWrapper>
      <TableWrapper label='Photos & Description'>
        <p className='text-sm font-semibold mb-2.5'>Photos of Your Gear</p>
        <p className='text-xs font-semibold'>Primary</p>
        <div
          className='w-[100px] h-[100px] bg-zinc-100 rounded-lg border mt-1 mb-4 border-slate-400/20'
          role='img'
        />
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          {photosSect.map((_) => (
            <>
              <p className='text-xs font-semibold'>{Object.keys(_)}</p>
              <p className='text-xs font-medium '>{Object.values(_)}</p>
            </>
          ))}
        </div>
      </TableWrapper>
      <TableWrapper label='Shipping' className='space-y-1.5'>
        <div className='text-xs font-semibold'>
          How will you deliver the item to the buyer?
        </div>
        {['Shipping', 'Local Pickup'].map((_) => (
          <div key={_} className='flex items-center gap-2.5'>
            <Icon icon={'material-symbols:check'} />
            <span className='text-xs font-medium '>{_}</span>
          </div>
        ))}
        <p className='text-sm font-semibold'>Shipping costs per region</p>
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          <p className='text-xs font-semibold'>Continental U.S.</p>
          <p className='text-xs font-medium '>$435.00</p>
        </div>
      </TableWrapper>{' '}
      <TableWrapper label='Pricing' className='space-y-1.5'>
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          <p className='text-xs font-semibold'>Listing price</p>
          <p className='text-xs font-medium '>$435.00</p>
        </div>
        <p className='text-sm font-semibold'>Optional selling tools</p>
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          <p className='text-xs font-semibold'>Offers</p>
          <p className='text-xs font-medium '>Accept offers</p>
        </div>
      </TableWrapper>
      <TableWrapper label='Bump' className='space-y-1.5'>
        <div className='grid grid-cols-[3fr_5fr] gap-1.5'>
          <p className='text-xs font-semibold'>Bump Rate</p>
          <p className='text-xs font-medium '>5%</p>
        </div>
      </TableWrapper>
    </section>
  );
}

const yourGear = [
  { 'Listing Title': 'Fender Jazz Bass 2010' },
  { 'Listing State': 'Draft Listing' },
  { Brand: 'Fender' },
  { Model: 'Jazz Bass' },
  { Year: '2010' },
  { Category: 'Keyboards and Synths' },
  { 'Handmade?': 'Yes' },
];

const photosSect = [
  { 'Condition & Description': null },
  { Condition: 'Mint' },
  { Description: 'ZXZz' },
  { 'Sold "As-Described"?': 'Yes' },
];
