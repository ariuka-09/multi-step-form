import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";

export function StepThree(props) {
  const { currentIndex, setCurrentIndex } = props;
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
          <div>
            <TextField type="date" label="Date of birth *"></TextField>
            <TextField type="picture" label="Date of birth *"></TextField>
          </div>
        </div>
        <div className="flex">
          <ContinueButton
            type="back"
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          ></ContinueButton>
          <ContinueButton
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          ></ContinueButton>
        </div>
      </div>
    </div>
  );
}
