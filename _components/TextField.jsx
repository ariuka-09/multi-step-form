"use client";
import react, { useState } from "react";
export function TextField(props) {
  const { placeholder, label, type, isRequired, style, onChange } = props;
  const [text, setText] = useState("");
  const defaultValue = localStorage.getItem(label);

  if (style == "file") {
    return <div></div>;
  } else
    return (
      <div className="flex flex-col w-[348px] h-fit gap-1  ">
        <label htmlFor={label} name={label} className="font-bold">
          {label}
          {isRequired && <span>*</span>}
        </label>

        <input
          type={type}
          placeholder={placeholder}
          className="rounded-[8px] w-[348px] h-[44px] border-2 px-3 active:border-blue-400 hover:border-gray-400 text-black"
          name={label}
          id={label}
          defaultValue={defaultValue}
          onChange={(e) => {
            setText(e.target.value);
            onChange(e);
          }}
        ></input>
      </div>
    );
}
