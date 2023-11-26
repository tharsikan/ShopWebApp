import * as Tabs from '@radix-ui/react-tabs';

export default function AboutTabs({ isListing }: { isListing?: boolean }) {
  return (
    <Tabs.Root defaultValue={tabs.at(0)} className="py-5">
      <Tabs.List className="pl-10">
        {tabs.map((tab) => (
          <Tabs.Trigger
            className="relative px-6 pt-3 pb-2 group rounded-t-xl text-zinc-600 aria-selected:bg-white aria-selected:text-black aria-selected:font-bold"
            value={tab}
            key={tab}
          >
            {tab}
            <div className="absolute bottom-0 hidden shadow-[-10px_0_white] w-10 h-6 group-aria-selected:block rounded-bl-xl left-full" />
            <div className="absolute bottom-0 hidden w-10 shadow-[10px_0_white] h-6 group-aria-selected:block rounded-br-xl right-full" />
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content
        value={tabs.at(0)!}
        className="px-6 py-4 bg-white rounded-xl"
      >
        Say Hi to Chante, my first guitar passed on from my from my father's old
        collection. We have been rocking out for the last 10 plus years, cant
        live without my baby! Mrs.Reliable and has a great vintage tone. She has
        been modified multiple times. I replaced the pickups and the bridge for
        better sustain. Has been in my family for the last 20 plus years. I can
        go all day raving about her.
      </Tabs.Content>
      <Tabs.Content
        value={tabs.at(1)!}
        className=" py-4 bg-white rounded-xl"
      >
        {!isListing ? (
          <div className="text-sm font-medium text-neutral-700 [&>b]:pl-2 [&>b]:pr-1">
            <b>Status:</b>Current
            <b>Brand: </b>Fender <b>Model:</b>Jazz Deluxe <b>Category:</b>
            Bass <b>Method:</b>
            Traded<b>Duration:</b>
            1-5 Years <b>Released:</b>
            1980s
          </div>
        ) : (
          <div className="text-sm font-medium text-neutral-700 [&>b]:pl-1 [&>b]:pr-0.5">
            <b>Condition:</b>Great
            <b>Brand:</b>Fender <b>Model:</b>Jazz Deluxe <b>Category:</b>
            Bass 
          </div>
        )}
      </Tabs.Content>
    </Tabs.Root>
  );
}

const tabs = ['About this listing', 'Product specs'];
