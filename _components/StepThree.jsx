import { useState } from "react";
import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";

export function StepThree(props) {
  const { currentIndex, setCurrentIndex } = props;
  const [error, setError] = useState({});
  const [file, setFile] = useState(null);

  const handleImgChange = (e) => {
    const chosenfile = e.target.files[0];
    console.log("working");
    if (chosenfile) {
      setFile(chosenfile);
    }
  };
  const validate = (data, numberDate) => {
    const errors = {};
    const date = data.get("Date of birth");
    console.log(date);
    if (!date) {
      console.log("error working");

      errors.date = "please provide a valid date";
    }
    console.log(errors.date);

    if (2025 - numberDate < 18) {
      errors.date = "you have to be 18 or older";
    }
    console.log(errors.date);
    console.log(numberDate);

    setError(errors);
    console.log(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    localStorage.setItem("Date of birth", data.get("Date of birth"));
    const date = data.get("Date of birth");
    const numberDate = Number(date[0] + date[1] + date[2] + date[3]);
    console.log(numberDate);

    event.preventDefault();

    if (!validate(data, numberDate)) {
      return null;
    }

    // setCurrentIndex((prev) => prev + 1);
    localStorage.setItem("currentIndex", 3);
    // setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#white] text-black">
      <div className="flex flex-col items-center gap-40.5 bg-white p-8 shadow-2xl rounded-[8px] ">
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
          <div>
            <form action="" onSubmit={onSubmit}>
              <TextField
                type="date"
                label="Date of birth"
                name="Date of birth"
                onChange={() => {
                  setError({ ...error, date: undefined });
                  console.log("working");
                }}
              ></TextField>
              {error.date && <p className="text-red-600">{error.date} </p>}
              <TextField
                type="file"
                label="Profile picture"
                accept="image/*"
                onChange={handleImgChange}
                style="file"
              />
              {file && (
                <div>
                  <p>Preview:</p>
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-40 h-40 object-cover border rounded"
                  />
                </div>
              )}
              <div className="flex">
                <ContinueButton
                  type="back"
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                ></ContinueButton>
                <ContinueButton
                  type="submit"
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
