import { cn } from "../../../helpers/utils";
import Card from "../../common/Card";

export const SearchPeople = () => {
  return (
    <Card className="divide-y p-0">
      {peoples.map((el, idx) => {
        return (
          <div
            key={"notification" + idx}
            className={cn(
              "flex p-4 items-center justify-between gap-3 border-solid border-accentGray-400 transtion-all bg-transparent notification-item"
            )}
          >
            <div className="flex-shrink-0 relative">
              <img
                className="w-11 h-11 rounded-[50%]"
                src={el.img}
                alt={el.name}
              />
            </div>
            <div className="flex-grow pt-1">
              <h4 className="text-sm font-semibold flex items-center gap-3">
                {el.name} <div className="text-accentGray-700"> · </div>{" "}
                <div className="text-accentGray-700 font-normal text-xs">
                  {el.karma} Karma
                </div>
              </h4>
            </div>
            <div className="flex-shrink-0 max-sm:hidden ">
              <button className="h-8 px-8 py-[5px] bg-neutral-100 rounded-full text-sky-600 text-sm font-bold">
                Follow
              </button>
            </div>
          </div>
        );
      })}
    </Card>
  );
};

const peoples = [
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "8.2k",
    name: "u/fnderis",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "2.4k",
    name: "u/fnder132",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "395",
    name: "u/fndero",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "1",
    name: "u/fnderick",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "8.2k",
    name: "u/fnderis",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "2.4k",
    name: "u/fnder132",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "395",
    name: "u/fndero",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "1",
    name: "u/fnderick",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "8.2k",
    name: "u/fnderis",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "2.4k",
    name: "u/fnder132",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "395",
    name: "u/fndero",
  },
  {
    img: "/assets/imgs/brands/fodera.png",
    karma: "1",
    name: "u/fnderick",
  },
];
