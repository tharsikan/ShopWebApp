import { ComponentProps } from "react";
import Card from "../../../common/Card";

type CommunityRulesProps = ComponentProps<"div">;

export function CommunityRules({ className, ...props }: CommunityRulesProps) {
  return (
    <>
      <h4 className="text-lg mt-4 md:hidden font-semibold">Rules</h4>
      {rules.map((el, idx) => (
        <Card className="border md:mt-6 px-5 py-6 rounded-lg">
          <div key={el} className="flex gap-3 md:gap-4 items-center">
            <span className="md:w-16 shrink-0 text-center text-stone-700 text-md md:text-base font-semibold">
              {(idx + 1).toLocaleString("en", { minimumIntegerDigits: 2 })}
            </span>
            <h5 className="text-slate-800 text-sm md:text-base  font-medium">
              {el}
            </h5>
          </div>
        </Card>
      ))}
    </>
  );
}

const rules = [
  "Post high-energy content",
  "Titles must start with the 🔥 emoji",
  "Posts must contain nature",
  "Write a descriptive title",
  "No reposts",
  "NSFW posts are not allowed",
  "Titles Can't Say [Subject] is Lit",
  "No topics of human conceit.",
  "Karma/ account age requirement",
];
