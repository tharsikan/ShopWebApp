import { Icon } from '@iconify/react';
import * as Accordion from '@radix-ui/react-accordion';

export default function RulesAccordion() {
  return (
    <section>
      <p className='text-xl font-semibold'>r/NatureIsFuckingLit Rules</p>
      <Accordion.Root type='single' collapsible>
        {data.map((_, idx) => (
          <Accordion.Item
            value={_.ques}
            role='button'
            className='py-3 text-sm font-semibold text-left border-b last:border-0 border-slate-200'
            key={_.ques}
          >
            <Accordion.Trigger asChild className='group'>
              <div className='flex items-center justify-between'>
                0{idx + 1}. {_.ques}
                <Icon
                  icon={'iconamoon:arrow-up-2-light'}
                  className='w-8 text-xl transition-all rotate-180 group-aria-expanded:rotate-0'
                />
              </div>
            </Accordion.Trigger>
            <Accordion.Content className='font-normal'>
              {_.ans}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

const data = [
  { ques: 'Post high-energy content', ans: 'hello world' },
  { ques: 'Titles must start with the 🔥 emoji', ans: 'hello world' },
  { ques: 'Posts must contain nature', ans: 'hello world' },
  { ques: 'Write a descriptive title', ans: 'hello world' },
  { ques: 'No reposts', ans: 'hello world' },
  { ques: 'NSFW posts are not allowed', ans: 'hello world' },
  { ques: 'Titles Can\'t Say "[Subject] is Lit"', ans: 'hello world' },
  { ques: 'No topics of human conceit.', ans: 'hello world' },
  { ques: 'Karma/ account age requirement', ans: 'hello world' },
];
