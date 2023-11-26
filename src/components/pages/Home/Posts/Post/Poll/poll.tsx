import { Link } from "react-router-dom";
import Card from "../../../../../common/Card";
import "../Post.css";
import { Author } from "../common/author";
import { CardFooter } from "../common/card-footer";
import { User } from "../common/user";

const Poll = ({ el, idx }: { el: any; idx: number }) => {
  return (
    <Card className="h-full home-post" key={"home-post" + idx}>
      <User el={el} />
      <hr />
      <Author el={el} idx={idx} />
      <Link to={el.link}>
        <div className="mt-7">
          <p className="text-base md:text-2xl font-medium ">Nord or Roland?</p>
        </div>
        {el.prodDescription && (
          <div className="mt-4 text-xs font-medium text-accentGray-800">
            {el.prodDescription}
          </div>
        )}
      </Link>
      {el.options && (
        <div className="mt-2 md:mt-[18px]">
          {el.options.map((el2: any, idx2: any) => {
            return (
              <div
                className="flex items-center bg-accentGray-400 text-lg py-3 px-3 rounded-[10px] mb-[10px]"
                key={"home-post-option" + idx + "-" + idx2}
              >
                <input
                  className="relative float-left mr-1 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-black checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-black checked:after:bg-black checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-black checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-black dark:checked:after:border-black dark:checked:after:bg-black dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-black dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  name="flexRadioDefault"
                  id={el2}
                />
                <label
                  className="mt-px  text-xs inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor={el2}
                >
                  {el2}
                </label>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-between mt-2">
        <div className="text-[10px] font-medium text-accentGray-700">
          {el.votesCount} votes
        </div>
        <div className="text-[10px] font-medium text-accentGray-700">
          {el.timeLeft}
        </div>
      </div>
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default Poll;
