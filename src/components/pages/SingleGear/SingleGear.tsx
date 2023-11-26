import Product from "./Product";
import ProsCons from "./ProsCons";
import Reactions from "./Reactions";
import Specs from "./Specs";
import Trend from "./Trend";
import Ranges from "./Ranges";
import Buy from "./Buy";
import Review from "./Review";

const SingleGear = () => {
  return (
    <div >
      <Product />
      <Reactions />
      <Specs />
      <ProsCons />
      <Trend />
      <Ranges />
      <Buy />
      <Review />
    </div>
  );
};

export default SingleGear;
