import Card from '../../../common/Card';
import Author from '../Topic/author';
import PostFooter from '../Topic/post-footer';
import Vote from '../Topic/vote';

export default function PollCard() {
  return (
    <Card className='flex gap-2'>
      <Vote />
      <div className='grow p-3'>
        <Author />
        <div>
          <p className='text-lg font-medium'>Nord vs Korg for keys?</p>
          <div className='mt-[18px]'>
            {['Nord', 'Roland'].map((el) => {
              return (
                <div
                  className='flex items-center bg-accentGray-400 text-lg py-2.5 sm:py-3 px-3 rounded-[10px] mb-[10px]'
                  key={el}
                >
                  <input
                    className="relative float-left mr-1 h-5 w-5 aspect-square appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-black checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-black dark:checked:after:border-black dark:checked:after:bg-black dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-black dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type='radio'
                    name='flexRadioDefault'
                    id={el}
                  />
                  <label
                    className='mt-px w-full  text-xs inline-block pl-[0.15rem] hover:cursor-pointer'
                    htmlFor={el}
                  >
                    {el}
                  </label>
                </div>
              );
            })}
          </div>

          <div className='flex items-center justify-between mt-2'>
            <div className='text-[10px] font-medium text-accentGray-700'>
              316 votes
            </div>
            <div className='text-[10px] font-medium text-accentGray-700'>
              1 day 12 hours left
            </div>
          </div>
          <PostFooter />
        </div>
      </div>
    </Card>
  );
}
