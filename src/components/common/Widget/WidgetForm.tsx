import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  FEEDBACK: {
    title: "Feedback",
    image: {
      source: "/assets/imgs/home/advertising-3.png",
      alt: "A purple caterpillar image",
    },
  },
  BUGS: {
    title: "Bugs",
    image: {
      source: "/assets/imgs/home/about.png",
      alt: "A thought balloon image",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null); //type of feedback that the user is submitting
  const [feedbackSent, setFeedbackSent] = useState(false); // by default, the feedback is not sent
  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null); //restart the form
  }
  return (
    <div className="bg-slate-500 z-50 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            /* the comp. receives a  prop. onFeedbackTypeChanged with a function setFeedbackType*/
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)} //when the feedback is sent, set feedbackSent to true
            />
          )}
        </>
      )}
      <footer className="text-xs text-slate-200">Built with 💜 By Pete</footer>
    </div>
  );
}
