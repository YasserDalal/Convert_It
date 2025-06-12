
import { useState, useEffect } from "react";
import InputNumber from "./input tag/InputNumber";
import FirstUnit from "./select tag/FirstUnit";
import LastUnit from "./select tag/LastUnit"; 
import SwitchButton from "./switchButton/SwitchButton";

export default function InputContent({ className, contents, clicked }) {
  const [inputValue, setInputValue] = useState();
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  useEffect(() => {
  const validOptions = contents.find(obj => obj[clicked])?.[clicked][1].units || []; // get all units
  // if the length is greater than 2 then set the first and the second units
  validOptions.length >= 2 && setSelectedFrom(validOptions[0].name); setSelectedTo(validOptions[1].name); 
  }, [clicked, contents]);
  return (
    <div className={className}>
      <div className="w-full flex justify-center pb-4">
        <InputNumber inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <div className="max-[520px]:justify-center gap-2  flex max-[520px]:w-[100%]">
        <FirstUnit contents={contents} clicked={clicked} selectedFrom={selectedFrom} setSelectedFrom={setSelectedFrom} selectedTo={selectedTo}/>
        <SwitchButton selectedFrom={selectedFrom} selectedTo={selectedTo} setSelectedFrom={setSelectedFrom} setSelectedTo={setSelectedTo}/>
        <LastUnit contents={contents} clicked={clicked} selectedTo={selectedTo} setSelectedTo={setSelectedTo} selectedFrom={selectedFrom}/>
        <input type="button" value="Convert" className="w-28 max-[520px]:w-full h-12 rounded-lg bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150"/>
      </div>
    </div>
  ) 
}