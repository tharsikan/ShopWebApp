import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";

export const SearchCommunities = () => {
  return (
    <Card className="divide-y p-0 max-md:bg-transparent max-md:border-0 max-md:space-y-4">
      {communities.map((el, idx) => {
        return (
          <div
            key={"notification" + idx}
            className={cn(
              "flex p-4 max-md:py-3 max-md:bg-white max-md:rounded-lg max-md:border items-center justify-between gap-3 border-solid border-accentGray-400 transtion-all bg-transparent notification-item"
            )}
          >
            <div className="flex-shrink-0 flex items-center relative">
              <div className="text-sm font-semibold mr-2">
                {(idx + 1).toLocaleString("en", { minimumIntegerDigits: 2 })}
              </div>
              <img
                className="w-11 h-11 rounded-[50%]"
                src={el.img}
                alt={el.name}
              />
            </div>
            <div className="flex-grow pt-1">
              <h4 className="text-sm font-semibold max-sm:flex-col flex md:items-center md:gap-3">
                {el.name}{" "}
                <div className="text-accentGray-700 max-sm:hidden"> · </div>{" "}
                <div className="text-accentGray-700 font-normal text-xs">
                  {el.numberOfUser}
                </div>
              </h4>
              <p className="text-accentGray-700 text-xs max-md:hidden">
                {el.description}
              </p>
            </div>
            <div className="flex-shrink-0 max-sm:hidden">
              <button className="h-8 px-8 py-[5px] bg-neutral-100 rounded-full text-sky-600 text-sm font-bold">
                Join
              </button>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

const communities = [
  {
    img: "/assets/imgs/brands/fodera.png",
    numberOfUser: "1.2k Members",
    name: "r/FGFS",
    description:
      "ONF is a K-Pop boy group consisting of vocalists Hyojin, E-Tion, and MK (ON Team) and dancers J-Us, Wyatt, and U (OFF Team). They debuted on August...",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    numberOfUser: "1.2k Members",
    name: "r/FGFS",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    numberOfUser: "1.2k Members",
    name: "r/FGFS",
    description:
      "ONF is a K-Pop boy group consisting of vocalists Hyojin, E-Tion, and MK (ON Team) and dancers J-Us, Wyatt, and U (OFF Team). They debuted on August...",
  },
];
