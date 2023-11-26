import Jumbotron from "../Jumbotron";


const Jumbo = ({
  title,
  des,
}: {
  title: string;
  des: string;
 
}) => {
  return (
    <Jumbotron className="flex items-center md:hidden">
      <div>
        <div className="text-sm sm:text-[22px] font-semibold mb-2">
          {title}
        </div>
        <p className="text-accentGray-200 text-xs sm:text-sm">
          {des}
        </p>
      </div>
    </Jumbotron>
  );
};

export default Jumbo;
