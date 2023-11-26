import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../../../../common/Card";
import "../Post.css";
import { Author } from "../common/author";
import { CardFooter } from "../common/card-footer";
import { User } from "../common/user";

const Topic = ({ el, idx }: { el: any; idx: number }) => {
  const [isExpandedState, setIsExpandedState] = useState(false);
  return (
    
      <Card className="h-full home-post" key={"home-post" + idx}>
        <User el={el} />
        <hr />
      <Author topic el={el} idx={idx} />
      <Link to={el.link}>
        {el.postTitle && (
          <div className="mt-3 text-base md:text-2xl font-medium">
            {el.postTitle}
          </div>
        )}
        {el.postText && (
          <div className="mt-3 md:text-base font-normal">
            {isExpandedState ? (
              <>
                {el.postText}{" "}
                {el.postText.length > 194 && (
                  <span
                    className="cursor-pointer text-accentYellow-500"
                    onClick={() => setIsExpandedState(false)}
                  >
                    Read less
                  </span>
                )}
              </>
            ) : (
              <>
                {el.postText.slice(0, 194)}
                {el.postText.length > 194 && (
                  <>
                    ...{" "}
                    <span
                      className="cursor-pointer text-accentYellow-500"
                      onClick={() => setIsExpandedState(true)}
                    >
                      Read more
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
        </Link>
        <CardFooter el={el} idx={idx} />
      </Card>

  );
};

export default Topic;
