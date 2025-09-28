export function ContinueButton(props) {
  const { children, type, currentIndex, setCurrentIndex, onClickHandle } =
    props;

  if (type !== "back") {
    return (
      <div>
        <button
          type={type == "back" ? "back" : "submit"}
          className={`h-[44px] mt-30 rounded-[6px] border-[1px] flex items-center justify-center ${
            type == "back"
              ? currentIndex == 0
                ? "bg-[#D6D8DB] text-[#A9ACAF] w-[128px] "
                : "w-[128px] bg-[#FFFFFF] "
              : "bg-[#121316] w-[280px] text-[white]  "
          }`}
        >
          <p>{`${
            type !== "back"
              ? currentIndex + 1 < 3
                ? `Continue ${Number(currentIndex) + 1} / 3`
                : `Submit 3 / 3`
              : "Back"
          }`}</p>
        </button>
      </div>
    );
  } else {
    return (
      <input
        type="button"
        onClick={() => {
          localStorage.setItem("currentIndex", currentIndex);
          console.log(currentIndex);
          setCurrentIndex(currentIndex - 1);
        }}
        className={`h-[44px] mt-30 rounded-[6px] border-[1px] flex items-center justify-center ${
          type == "back"
            ? currentIndex == 0
              ? "bg-[#D6D8DB] text-[#A9ACAF] w-[128px] "
              : "w-[128px] bg-[#FFFFFF] "
            : "bg-[#121316] w-[280px] text-[white]  "
        }`}
        value={"back"}
      />
    );
  }
}
// }
