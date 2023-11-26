import React from "react";

import Login from "../../interfaces/Login";
import { authLogin } from "../../redux/features/auth/authLoginSlice";
import { authClose } from "../../redux/features/auth/authPopupSlice";
import { useAppDispatch } from "../../redux/hooks";

import { startSignup } from "../../redux/features/modal.store";
import AuthBtns from "./AuthBtns";
import { notifySelect } from "../../redux/features/notify/notifySlice";

interface LoginProps {
  inputAssets: Login[];
}

const LoginForm: React.FC<LoginProps> = ({ inputAssets }: LoginProps) => {
  const dispatch = useAppDispatch();
  const userLogin = () => {
     dispatch(
       notifySelect({ title: "Welcome back to Pierre!", type: 0, open: true })
     );   
    dispatch(authLogin());
   
    dispatch(authClose());
  };
  return (
    <div>
      <section>
        <div className="mt-3 ">
          <h1 className="text-2xl mb-4 text-center xs:w-fit m-auto">
            Member Login
          </h1>
          <p className="text-center xs:w-fit flex justify-center items-center m-auto">
            If you don't have an account you can
            <span
              onClick={() => dispatch(startSignup())}
              className="ml-1 underline font-bold text-orange-600 cursor-pointer"
            >
              Register here!
            </span>
          </p>
        </div>
      </section>
      <form className="mt-8 relative z-0 md:w-full">
        {inputAssets.map((details, index) => {
          return (
            <div className="relative mb-8" key={details.placeholder}>
              {/* <label>{details.name}</label> */}
              <input
                className="w-full bg-[#F6F7F8] rounded-2xl pb-2 pl-8 p-3 mt-1"
                type={details.type}
                placeholder={details.placeholder}
              />
              <img
                className="absolute top-4 left-3 w-4 h-4"
                src={details.logo}
                alt="logo"
              />

              <img
                className={`${
                  details.logoTwo ? details.logoTwo : "hidden"
                } absolute right-2 bottom-4 cursor-pointer`}
                src={details.logoTwo}
                alt=""
              />
            </div>
          );
        })}
      </form>

      <div className="mt-12">
        <button
          className="bg-[#3E454B] text-white w-full p-2 rounded-2xl"
          onClick={() => {
            userLogin();
          }}
        >
          Login
        </button>
        <p className="text-[#B5B5B5] my-5 text-center">or continue with</p>
        <AuthBtns />
        <div className="xs:w-full sm:w-full max-w-96 text-center m-auto mt-6">
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

export default LoginForm;
