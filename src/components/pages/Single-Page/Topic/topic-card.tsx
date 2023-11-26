import Card from '../../../common/Card/Card';
import Author from './author';
import PostFooter from './post-footer';
import Vote from './vote';

export default function TopicCard() {
  return (
    <Card className="flex gap-2">
      <Vote />
      <div className="grow p-3">
        <Author />
        <div>
          <p className="text-lg font-medium">
            Does anyone like Acoustic Bass Guitars?
          </p>
          <p className="text-sm font-medium tracking-normal">
            I’ve only had a couple and rarely used them live. The ones I had
            were definitely cheaper, but even if I invested some money in a
            decent one I think I’d still reach for my J bass in most
            acoustic/folky scenarios. Does anyone have a genre or situation that
            they prefer to play acoustic BG on? Maybe I need to go camping more
            to really realize their utility.
          </p>
          <PostFooter />
        </div>
      </div>
    </Card>
  );
}
