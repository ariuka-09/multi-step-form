export function TextField(props) {
  const { placeholder, label, type, isRequired } = props;
  return (
    <div className="flex flex-col w-[348px] h-fit gap-1  ">
      <p className="font-bold">{label} </p>

      <input
        type={type}
        placeholder={placeholder}
        className="rounded-[8px] w-[348px] h-[44px] border-2 px-3 active:border-red-400 hover:border-2 hover:border-pink-900"
      />
    </div>
  );
}
