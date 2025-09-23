import { ContinueButton } from "./ContinueButton";

export function AllSet(props) {
  const { currentIndex } = props;
  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#eae1e1] ">
      <div className="flex flex-col items-center gap-40.5 bg-white p-8 rounded-[8px] ">
        <div className="flex flex-col gap-7">
          <div>
            <img
              src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
              alt=""
            />
            <p className="text-[26px] font-bold">You're All Set! 🔥</p>
            <p className="text-[#8E8E8E] text-[18px] ">
              We've received your submission. Thank you!
            </p>
          </div>
          <ContinueButton type="back"></ContinueButton>
        </div>
      </div>
    </div>
  );
}
