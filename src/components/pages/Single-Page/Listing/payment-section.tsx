import { HTMLAttributes } from 'react';
import { cn } from '../../../../helpers/utils';
import Card from '../../../common/Card/Card';
import { Icon } from '@iconify/react';
import GradientBtn from '../../../buttons/GradientBtn/GradientBtn';
import GreyBtn from '../../../buttons/GreyBtn/GreyBtn';

interface PaymentSectionProps extends HTMLAttributes<HTMLDivElement> {}

export default function PaymentSection({
  className,
  ...props
}: PaymentSectionProps) {
  return (
    <section
      className={cn('grid grid-cols-1 gap-4 lg:grid-cols-2', className, {})}
      {...props}
    >
      <div>
        <div className='flex overflow-hidden rounded-lg'>
          <div className='min-w-[11px] min-h-full bg-accentYellow-500 ' />
          <div className='p-3.5 grow bg-yellow-500/30 space-y-3'>
            <p className='font-semibold'>This item is sold As-Described</p>
            <div>
              <p className='font-semibold'>Muzfi Protection</p>
              <p className='text-xs'>
                Simple Returns, Secure Transactions, Human Support{' '}
                <span className='text-blue-700 underline'>Learn more</span>
              </p>
            </div>
            <div>
              <p className='font-semibold'>Secure Checkout</p>
              <p className='text-xs'>
                <span className='underline '>
                  At Muzfi, your safety and security is our priority.
                </span>
              </p>
            </div>
            <div>
              <p className='font-semibold'>Fast and Reliable</p>
              <p className='text-xs'>
                Ships from United States{' '}
                <span className='text-blue-700 underline'>Learn more</span>
              </p>
            </div>
          </div>
        </div>
        {/* user section */}
        <Card>
          <div className='flex items-center gap-4 px-2 py-3 sm:px-3 sm:py-4'>
            <img
              src='https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='w-20 rounded-full max-sm:w-14 aspect-square'
            />
            <div>
              <div className='text-lg font-semibold max-sm:text-xs '>
                Fender Jazz 1967’
              </div>
              <p className='flex items-center gap-1 max-sm:text-[8px] text-xs font-medium text-neutral-400'>
                100+ Reviews &gt; 100+ Gear Rooms
              </p>
              <div className='flex gap-1 sm:gap-2.5 pt-2.5'>
                {['own', 'had'].map((el) => (
                  <GradientBtn
                    label={el}
                    key={el}
                    short
                    className={'sm:h-7 h-6'}
                  />
                ))}
              </div>
            </div>
            <div className='flex gap-2.5 items-stretch'>
              <GradientBtn
                short
                label={
                  <>
                    <Icon className='text-xl' icon={'oi:lock-locked'} />
                  </>
                }
              />
              <GradientBtn
                short
                className={'from-zinc-100 border to-zinc-100'}
                label={
                  <>
                    <Icon
                      icon={'ri:heart-line'}
                      className='text-xl text-black'
                    />
                  </>
                }
              />
            </div>
          </div>
        </Card>
      </div>
      <Card className='[&>div]:flex !mt-0 space-y-5 !p-4 font-medium [&_aside]:min-w-[87px]'>
        <div>
          <aside className='w-[87px] text-black text-base'>Shipping:</aside>
          <div>
            <p>
              <span className='font-semibold'>US $100.00</span>
              <span> Standard Shipping. See details</span>
            </p>
            <p className='text-sm text-zinc-600'>
              Located in: Raleigh, North Carolina, United States
            </p>
          </div>
        </div>

        <div>
          <aside>Delivery:</aside>
          <div>
            Estimated between{' '}
            <span className='font-semibold'>Fri, Jun 23 </span>
            and
            <span className='font-semibold'> Mon, Jun 26 </span>
            to 06106
          </div>
        </div>
        <div>
          <aside>Returns:</aside>
          <p>Seller does not accept returns. See details</p>
        </div>
        <div>
          <aside>Payments:</aside>
          <div>
            <div className='flex gap-2.5 flex-wrap'>
              {['visa', 'mastercard', 'master', 'american', 'paypal'].map(
                (img) => (
                  <img
                    alt={img}
                    key={img}
                    src={`/assets/vectors/common/${img}.svg`}
                  />
                )
              )}
            </div>
            <p className='mt-3 text-sm'>
              *$234.99 for 24 months. Minimum purchase required. <br />
              See terms and apply now
            </p>
            <div>
              <img
                alt={'ebay'}
                key={'ebay'}
                src={`/assets/vectors/common/${'ebay'}.svg`}
              />
              <div className='text-xs'>
                Earn up to 5x points when you use your eBay Mastercard®.{' '}
                <span className='text-blue-700 underline'>Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
