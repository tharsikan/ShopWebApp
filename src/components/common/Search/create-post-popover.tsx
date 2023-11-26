import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
const CreatePost = ({ children }: { children: React.ReactNode }) => (
  <Popover.Root>
    <Popover.Trigger className="mr-2">{children}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        side="bottom"
        className="z-50 w-40 mt-1 rounded shadow bg-gradient-to-l right-0 from-red-500 to-yellow-500 "
      >
        <div className="bg-white rounded divide-y">
          {data.map((_) => (
            <Link
              to={_.href}
              key={_.label}
              className="flex items-center gap-2 px-4 py-3"
            >
              <img src={`/assets/vectors/navbar/${_.label}.svg`} alt="" />
              <p className="right-0 font-medium capitalize hover:text-transparent text-zinc-700 bg-gradient-to-l from-red-500 to-yellow-500 bg-clip-text">
                {_.label}
              </p>
            </Link>
          ))}
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default CreatePost;

const data = [
  {
    label: "topic",
    href: "/create/topic",
  },
  {
    label: "listing",
    href: "/create/listing",
  },
  {
    label: "new gear",
    href: "/create/new-gear",
  },
  {
    label: "polls",
    href: "/create/polls",
  },
];
