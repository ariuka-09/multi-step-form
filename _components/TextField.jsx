"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export function TextField(props) {
  const { placeholder, label, type, isRequired, hideButton } = props;
  const [text, setText] = useState("");
  const id = uuidv4();
  return (
    <div className="flex flex-col w-[348px] h-fit gap-1  ">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>

      <input
        formAction={URL.aapsmd}
        id={id}
        required={true}
        type={type}
        placeholder={placeholder}
        className="rounded-[8px] w-[348px] h-[44px] border-2 px-3 active:border-blue-400 hover:border-gray-400"
        name={label}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
    </div>
  );
}
