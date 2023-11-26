import Card from "../../../../../common/Card";
import "../Post.css";
import { Author } from "../common/author";
import { Benefits } from "./benefits";
import { CardFooter } from "../common/card-footer";
import { Images } from "../common/images";
import { User } from "../common/user";
import { Link } from "react-router-dom";

const NewGear = ({ el, idx }: { el: any; idx: number }) => {
  return (
    <Card className="h-full home-post" key={"home-post" + idx}>
      <User el={el} />
      <hr />
      <Author el={el} idx={idx} />
      <Link to={el.link}>
        <div className="">
          <div className="text-center">
            <p className="font-semibold text-lg">{el.postTitle}</p>
            <p className="text-xs font-semibold text-red-400">Current Gear</p>
          </div>
        </div>

        <Benefits el={el} idx={idx} />
      </Link>
      {el.prodDescription && (
        <div className="mt-4 text-xs font-medium text-accentGray-800">
          {el.prodDescription}
        </div>
      )}
      <Images imgs={el.imgs} length={el.imgs?.length} idx={idx} />
      <CardFooter el={el} idx={idx} />
    </Card>
  );
};

export default NewGear;
