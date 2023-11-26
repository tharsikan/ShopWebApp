import React from "react";
import Register from "../../interfaces/Register";
import { handleNext } from "../../redux/features/auth/authTypeSlice";
import { startLogin } from "../../redux/features/modal.store";
import { useAppDispatch } from "../../redux/hooks";
import AuthBtns from "./AuthBtns";
interface RegisterProps {
  inputAssets: Register[];
  title: String;
}

const SignupB: React.FC<RegisterProps> = ({
  inputAssets,
  title,
}: RegisterProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="tablet:hidden p-4">
      <section>
        <div className="mt-8">
          <h1 className="text-3xl mb-4 text-center">{title}</h1>
          <p className=" text-center xs:w-fit w-60 m-auto">
            If you already have an account registered you can
            <span
              className="ml-1 underline font-bold text-orange-600 cursor-pointer"
              onClick={() => {
                dispatch(startLogin());
              }}
            >
              Login here!
            </span>
          </p>
        </div>
      </section>
      <form className="mt-8 relative z-0 md:w-full">
        {inputAssets.map((details, index) => {
          return (
            <div className="relative mb-8" key={details.name}>
              <input
                className="w-full bg-[#F6F7F8] rounded-2xl pb-2 pl-9 p-3 mt-1"
                type={details.type}
                placeholder={details.placeholder}
              />
              <img
                className="absolute top-4 left-3 w-4 h-4"
                src={details.logo}
                alt="log"
              />

              <img
                className={`${
                  details.logoTwo ? details.logoTwo : "hidden"
                } absolute right-2 bottom-4`}
                src={details.logoTwo}
                alt=""
              />
            </div>
          );
        })}
      </form>

      <div className="mt-16">
        <button
          className="bg-[#3E454B] text-white w-full p-2 rounded-2xl"
          onClick={() => {
            dispatch(handleNext());
          }}
        >
          Continue
        </button>
        <p className="text-[#B5B5B5] my-5 text-center">or continue with</p>

        <AuthBtns />

        <div className="xs:w-full sm:w-full w-96 text-center m-auto mt-6">
          <p>
            By continuing, you are setting up a Muzfi account and agree to our
            <span className="text-[#0079D3] cursor-pointer mx-1">
              User Agreement
            </span>
            and
            <span className="text-[#0079D3] cursor-pointer mx-1">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupB;
