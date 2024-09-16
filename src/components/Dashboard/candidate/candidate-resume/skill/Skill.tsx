import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type Props = {
  skill: string[];
  mySkill: string[];
  setSkill: (skill: string[]) => void;
};

const Skill = ({ setSkill, mySkill }: Props) => {
  const [optionValues, setOptionValues] = useState<string[]>([
    "React.js",
    "TypeScript",
    "Express.js",
    "JavaScript",
  ]);

  const [modal, setModal] = useState(false);
  const [textValue, setTextValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Initialize textValue with mySkill by default if mySkill has values
    if (mySkill?.length > 0) {
      setTextValue(mySkill);
      // Remove mySkill values from optionValues
      setOptionValues((prev) => prev.filter((item) => !mySkill.includes(item)));
    }
  }, [mySkill]);

  const handleOptionClick = (value: string) => {
    // Prevent duplicate additions
    if (!textValue.includes(value)) {
      setTextValue((prev) => [...prev, value]);
      setOptionValues((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // Prevent duplicate additions from input
      if (!textValue.includes(inputValue) && !optionValues.includes(inputValue)) {
        handleOptionClick(inputValue);
        setInputValue("");
      } else {
        // Clear input if the skill already exists
        setInputValue("");
      }
    }
  };

  const handleValueRemove = (value: string) => {
    setTextValue((prev) => prev.filter((item) => item !== value));
    setOptionValues((prev) => [...prev, value]);
  };

  useEffect(() => {
    setSkill([...textValue]);
  }, [textValue]);

  return (
    <>
      <div className="relative w-full">
        <div
          className={`w-full p-1 rounded-sm bg-slate-300 flex flex-wrap relative ${
            textValue.length > 0 ? "h-fit" : "h-[30px]"
          }`}
        >
          {textValue.map((value: string, i: number) => (
            <div
              key={i}
              className={`flex items-center bg-gray-00 bg-white p-1 m-1 rounded`}
            >
              <span>{value}</span>
              <button
                className="ml-2 bg-red-500 text-white rounded px-1"
                onClick={() => handleValueRemove(value)}
              >
                <IoMdClose />
              </button>
            </div>
          ))}
        </div>
        <p
          className="absolute top-1 right-3 cursor-pointer"
          onClick={() => setModal(!modal)}
        >
          <FaSortDown />
        </p>
        {modal && (
          <div className="absolute z-20 bg-white border border-gray-500 rounded-sm p-2 right-0 mt-2 h-[150px] overflow-hidden overflow-y-scroll w-full">
            {optionValues.map((value: string, i: number) => (
              <div key={i} className="bg-green-500 p-1 my-1 cursor-pointer">
                <p onClick={() => handleOptionClick(value)}>{value}</p>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add More..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              className="mt-2 p-1 border border-gray-500 rounded w-full"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Skill;
