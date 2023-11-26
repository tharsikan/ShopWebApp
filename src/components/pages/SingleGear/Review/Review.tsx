import GradientBtn from "../../../buttons/GradientBtn";
import Card from "../../../common/Card";

const reviews = [
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages,
      </>
    ),
  },
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make.
      </>
    ),
  },
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make.
      </>
    ),
  },
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make.
      </>
    ),
  },
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages,
      </>
    ),
  },
  {
    img: "/assets/vectors/single-catalog/user.svg",
    name: "ramsesmiron",
    time: "1 week ago",
    comment: (
      <>
        <span className="text-accentBlue-500">@maxblagun</span> Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages,
      </>
    ),
  },
];

const Review = () => {
  return (
    <Card className="mt-6 p-5">
      <div className="text-[22px] font-semibold">Reviews (1)</div>
      <div className="mt-6">
        <textarea
          name="reviews"
          id="reviews"
          rows={3}
          className="w-full bg-accentGray-400 rounded-[4px] outline-none p-2"
        ></textarea>
      </div>

      <div className="flex justify-end items-center mt-3">
        <GradientBtn className="px-6" label="Send" />
      </div>

      <div className="mt-6 border-t border-accentGray-400">
        {reviews.map((el, idx) => {
          return (
            <div className="flex items-start gap-4 mt-6" key={"review-" + idx}>
              <div className="border border-accentYellow-700 rounded-[4px] text-accentYellow-700 w-9 p-2 flex flex-col items-center">
                <div className="w-5 h-5 flex justify-center items-center cursor-pointer">
                  +
                </div>
                <div>12</div>
                <div className="w-5 h-5 flex justify-center items-center cursor-pointer">
                  -
                </div>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap p-2 gap-4">
                <div className="flex-shrink-0">
                  <img src={el.img} alt="" />
                </div>
                <div>
                  <div className="flex justify-between items-center gap-5 flex-wrap mb-[10px]">
                    <div className="flex flex-wrap sm:flex-nowrap gap-2">
                      <div className="text-sm font-semibold">{el.name}</div>

                      <div className="flex items-center gap-[1px]">
                        <img
                          src="/assets/vectors/catalog/star.svg"
                          alt="star"
                        />
                        <img
                          src="/assets/vectors/catalog/star.svg"
                          alt="star"
                        />
                        <img
                          src="/assets/vectors/catalog/star.svg"
                          alt="star"
                        />
                        <img
                          src="/assets/vectors/catalog/star.svg"
                          alt="star"
                        />
                        <img
                          src="/assets/vectors/catalog/star.svg"
                          alt="star"
                        />
                      </div>
                      <div className="sm:ms-3">{el.time}</div>
                    </div>

                    <div className="flex gap-5">
                      <div className="hidden md:flex cursor-pointer items-center gap-[10px] text-accentGreen-800">
                        <img
                          src="/assets/vectors/single-catalog/edit.svg"
                          alt="edit"
                        />
                        Edit
                      </div>
                      <div className="hidden md:flex cursor-pointer items-center gap-[10px] text-[#FF0000]">
                        <img
                          src="/assets/vectors/single-catalog/delete.svg"
                          alt="delete"
                        />
                        Delete
                      </div>
                      <div className="flex cursor-pointer items-center gap-[10px] text-accentBlue-500">
                        <img
                          src="/assets/vectors/single-catalog/reply.svg"
                          alt="reply"
                        />
                        Reply
                      </div>
                    </div>
                  </div>

                  <div>{el.comment}</div>

                  <div className="flex justify-between items-center md:hidden mt-[10px]">
                    <div className="flex cursor-pointer items-center gap-[10px] text-accentGreen-800">
                      <img
                        src="/assets/vectors/single-catalog/edit.svg"
                        alt="edit"
                      />
                      Edit
                    </div>
                    <div className="flex cursor-pointer items-center gap-[10px] text-[#FF0000]">
                      <img
                        src="/assets/vectors/single-catalog/delete.svg"
                        alt="delete"
                      />
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Review;
