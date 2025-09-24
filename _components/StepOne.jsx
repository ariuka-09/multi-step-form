"use client";
import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";
import { useState } from "react";
export function StepOne({ currentIndex, setCurrentIndex }) {
  const [error, setError] = useState({});

  const validate = (data) => {
    const errors = {};
    const name = data.get("First name *");
    const lastName = data.get("Last name *");
    const username = data.get("Username *");
    if (!name) {
      errors.name = "please provide a valid name";
    }
    if (!lastName) {
      errors.lastName = "please provide a valid last name";
    }
    if (!username) {
      errors.username = "username is empty";
    }

    setError(errors);
    console.log(error);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    if (!validate(data)) {
      return null;
    }
    setCurrentIndex((previous) => previous + 1);
    console.log("working");
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
          <div className="flex flex-col">
            <form onSubmit={onSubmit}>
              <TextField
                // isEmpty={isEmpty}
                label="First name *"
                placeholder={"Your first name"}
                onChange={() => {
                  setError({ ...error, name: undefined });
                }}
              ></TextField>
              {error.name && <p className="w-fit text-red-400">{error.name}</p>}
              <TextField
                // isEmpty={isEmpty}
                label="Last name *"
                placeholder={"Your last name"}
                onChange={() => {
                  setError({ ...error, lastName: undefined });
                }}
              ></TextField>
              {error.lastName && (
                <p className="w-fit text-red-400">{error.lastName}</p>
              )}
              <TextField
                // isEmpty={isEmpty}
                label="Username *"
                placeholder={"Your username"}
                onChange={() => {
                  setError({ ...error, username: undefined });
                }}
              ></TextField>
              {error.username && (
                <p className="w-fit text-red-400">{error.username}</p>
              )}
              {/* <button type="submit">submit</button> */}
              <ContinueButton
                // isEmpty={isEmpty}
                type="submit"
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              ></ContinueButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
