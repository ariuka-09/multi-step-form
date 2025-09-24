"use client";
import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";
import { useState } from "react";
export function StepOne({ currentIndex, setCurrentIndex }) {
  const [error, setError] = useState({});

  const validate = (data) => {
    const errors = {};
    const name = data.get("name");
    if (!name) {
      errors.name = "is empty";
    }

    setError(errors);
    console.log(errors);
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
          <div className="gap-2 flex flex-col">
            <form onSubmit={onSubmit}>
              <TextField
                // isEmpty={isEmpty}
                label="name"
                placeholder={"Your first name"}
              ></TextField>
              {error.name && (
                <p className="h-10 w-20 text-red-400">{error.name}</p>
              )}
              <TextField
                // isEmpty={isEmpty}
                label="Last name *"
                placeholder={"Your last name"}
              ></TextField>
              <TextField
                // isEmpty={isEmpty}
                label="Username *"
                placeholder={"Your username"}
              ></TextField>
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
