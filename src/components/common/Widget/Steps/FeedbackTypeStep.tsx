import { FeedbackType, feedbackTypes } from "../WidgetForm";
import { CloseButton } from "../CloseButton";
import { Link } from "react-router-dom";
interface FeedbackTypeStepProps {
  /* the interface receives a props named onFeedbackTypeChanged
     with a function setFeedbackType */
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}
export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-white text-lg font-bold leading-6">
          Please give us your feedback!
        </span>
        <CloseButton />
      </header>
      <div className="flex py-4 gap-2 w-full justify-center">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-slate-300 rounded py-1 w-24 flex1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              /*set feedback type to the key of the feedback type
                            we are inferring manually the type of the key -> AS */
            >
              <img
                src={value.image.source}
                alt={value.image.alt}
                className="w-10 h-10"
              ></img>
              <span>{value.title}</span>
            </button>
          );
        })}
        <Link to="/contact">
          <button
            className="bg-slate-300 rounded py-1 w-24 flex1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"

            /*set feedback type to the key of the feedback type
                            we are inferring manually the type of the key -> AS */
          >
            <img
              src="/assets/imgs/home/help.png"
              alt="A Lamp image"
              className="w-10 h-10"
            ></img>
            <span>Help</span>
          </button>
        </Link>
      </div>
    </>
  );
}
