import { ContinueButton } from "./ContinueButton";
import { TextField } from "./TextField";

export function StepThree(props) {
  const onClickHandle = (event) => {
    console.log(event);
  };
  const { currentIndex, setCurrentIndex } = props;
  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    // if (!validate(data)) {
    //   return null;
    // }
    // setCurrentIndex((previous) => previous + 1);
    // console.log("working");
    const date = data.get("Date of birth *");
    const numberDate = Number(date[0] + date[1] + date[2] + date[3]);
    console.log(numberDate);
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
          <div>
            <form action="" onSubmit={onSubmit}>
              <TextField
                type="date"
                label="Date of birth *"
                name="Date of birth *"
              ></TextField>
              <TextField type="file" label="Date of birth *"></TextField>
              <div className="flex">
                <ContinueButton
                  type="back"
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                ></ContinueButton>
                <ContinueButton
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
