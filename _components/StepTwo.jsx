"use client";
import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";
import { useState } from "react";

export function StepTwo(props) {
  const { currentIndex, setCurrentIndex } = props;
  const [hide, setHide] = useState(true);
  const onClickHandle = (event) => {
    console.log(event);
  };
  const [error, setError] = useState({});
  const validate = (data) => {
    const errors = {};
    const email = data.get("Email *");
    const number = data.get("Phone number *");
    const password = data.get("Password *");
    const confirmation = data.get("Confirm password *");
    if (!email) {
      errors.email = "please enter a valid email";
    }
    if (!number) {
      errors.number = "please enter a valid number";
    }
    if (password.length < 6) {
      errors.password = "too short password";
    }
    if (confirmation !== password) {
      errors.confirmation = "enter the same password";
    }
    setError(errors);
    return Object.keys(errors).length == 0;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!validate(data)) {
      return null;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#eae1e1] ">
      <div className="flex flex-col items-center gap-40.5 bg-white p-8 rounded-[8px] ">
        <div className="flex flex-col gap-7">
          <div>
            <img
              src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
              alt=""
            />
            <p className="text-[26px] font-bold">Join Us! 😎</p>
            <p className="text-[#8E8E8E] text-[18px] ">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <form action="" className="" onSubmit={onSubmit}>
              <TextField placeholder={"Your email"} label="Email *"></TextField>
              {error.email && (
                <p className="w-fit text-red-400">{error.email}</p>
              )}
              <TextField
                placeholder={"Your phone number"}
                label="Phone number *"
              ></TextField>
              <TextField
                placeholder={"Your password"}
                label="Password *"
                type="password"
              ></TextField>
              <div className="flex relative">
                <TextField
                  placeholder={"Confirm password"}
                  label="Confirm password *"
                  type={hide ? "password" : "text"}
                ></TextField>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye absolute right-20 top-10.5"
                    viewBox="0 0 16 16"
                    onClick={() => {
                      setHide(!hide);
                      console.log(hide);
                    }}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </div>
              </div>
              <div className="flex">
                <ContinueButton
                  type="back"
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                ></ContinueButton>

                <ContinueButton
                  type="submit"
                  onClickHandle={() => onClickHandle(event)}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                ></ContinueButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
