import GradientBtn from "../buttons/GradientBtn";

interface Props {
  name: string;
  img: string;
  description: string;
  price?: string;
  numberOfReviews: number;
}

const ProductCard = ({ name, img, description, price, numberOfReviews }: Props) => {
  return (
    <div className="p-[6px] rounded-lg border border-solid border-accentGray-600 bg-white">
      <div className="relative rounded-lg w-full pt-[90%] bg-accentGray-70">
        <img
          src={img}
          className="absolute top-0 cursor-pointer h-full w-full"
        ></img>
        <img
          className="absolute top-2 right-2 cursor-pointer"
          src="/assets/vectors/catalog/heart.svg"
          alt="heart"
        />
      </div>
      <div className="mt-3 px-2 mb-2">
        <div className="md:text-[12px] text-[10px] font-bold w-full">{name}</div>

        <div className="mt-1 flex items-center gap-1">
          <div className="flex items-center gap-[1px]">
            <img src="/assets/vectors/catalog/star.svg" alt="star" />
            <img src="/assets/vectors/catalog/star.svg" alt="star" />
            <img src="/assets/vectors/catalog/star.svg" alt="star" />
            <img src="/assets/vectors/catalog/star.svg" alt="star" />
            <img src="/assets/vectors/catalog/star.svg" alt="star" />
          </div>
          <div className="text-[8px] mt-1">({numberOfReviews}) Reviews</div>
        </div>

        {price && <div className="font-semibold text-sm">{price}</div>}

        <GradientBtn
          className="w-full mt-3 h-8"
          icon="/assets/vectors/catalog/bag.svg"
          label="Add to Room"
        />
      </div>
    </div>
  );
};

export default ProductCard;
