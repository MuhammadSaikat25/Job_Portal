import React, { useEffect, useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
type Props = {
  aboutCompany: string[];
  setAboutCompany: (aboutCompany: string[]) => void;
};
const MultipleSelect = ({ setAboutCompany }: Props) => {
  const [optionValues, setOptionValues] = useState<string[]>([
    "Banking",
    "IT",
    "Human Recourses",
    "Digital Marketing",
  ]);
  const [modal, setModal] = useState(false);
  const [textValue, setTextValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleOptionClick = (value: string) => {
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
      handleOptionClick(inputValue);
      setInputValue("");
    }
  };

  const handleValueRemove = (value: string) => {
    setTextValue((prev) => prev.filter((item) => item !== value));
    setOptionValues((prev) => [...prev, value]);
  };
  useEffect(() => {
    setAboutCompany([...textValue]);
  }, [textValue]);
  return (
    <>
      <div className="relative w-full">
        <div
          className={`w-full p-1 rounded-sm bg-slate-300 flex flex-wrap relative ${
            textValue.length > 0 ? "h-fit" : "h-[30px]"
          }`}
        >
          {textValue.map((value) => (
            <div
              key={value}
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
            {optionValues.map((value: string) => (
              <div key={value} className="bg-green-500 p-1 my-1 cursor-pointer">
                <p onClick={() => handleOptionClick(value)}>{value}</p>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add More..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="mt-2 p-1 border border-gray-500 rounded w-full"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MultipleSelect;
