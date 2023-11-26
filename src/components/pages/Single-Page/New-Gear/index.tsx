import { cn } from '../../../../helpers/utils';
import AboutTabs from '../Listing/about-tabs';
import ThumbGallery from '../Listing/carousel';
import CommentSection from '../Listing/comment-section';
import Details from '../Listing/details';
import SimilarProduct from '../Listing/similar-product';

export default function NewGearPage() {
  return (
    <section>
      <div className='grid-cols-2 gap-6 lg:grid'>
        <ThumbGallery />
        <Details />
      </div>
      <AboutTabs />
      <div className='grid grid-cols-2 gap-5 md:bg-zinc-300 md:p-3.5 rounded-lg lg:grid-cols-4'>
        {data.map((_) => (
          <div className='rounded-md bg-accentYellow-500/30 md:bg-accentYellow-500/40 p-3.5 '>
            <p className='text-[11px] font-semibold'>{_.label}</p>
            <p className=' text-[11px] '>
              {_.placeholder}
            </p>
            <div className='flex justify-between mt-2'>
              {Array.from(Array(5).keys()).map((_, idx) => (
                <div
                  className={cn(
                    'w-[26px] h-[26px] bg-gray-800 text-white grid place-content-center font-semibold rounded-full',
                    { 'bg-orange-500': idx === 4 }
                  )}
                  key={_}
                >
                  {_ + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CommentSection />
      <SimilarProduct />
    </section>
  );
}
const data = [
  {
    label: "Usability Rating",
    placeholder:
      "The efficiency and satisfaction of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Performance Rating",
    placeholder:
      "The behavior, capabilities and execution of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Value Rating",
    placeholder:
      "The importance, worth, or usefulness of an user's experience when interacting with Gear Item.",
  },
  {
    label: "Durability Rating",
    placeholder:
      "The quality, dependability and longevity of an user's experience when interacting with Gear Item.",
  },
];
