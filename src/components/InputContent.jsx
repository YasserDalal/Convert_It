
import { useEffect } from "react";
import InputNumber from "./input tag/InputNumber";
import FirstUnit from "./select tag/FirstUnit";
import LastUnit from "./select tag/LastUnit"; 
import SwitchButton from "./switchButton/SwitchButton";

import Convert from "../events/convertions/Convert";
export default function InputContent({ className, contents, clicked, setResult, inputValue, setInputValue, selectedFrom, setSelectedFrom, selectedTo, setSelectedTo, setWeight, setHeight, weight, height, unitsFrom, setUnitsFrom, unitsTo, setUnitsTo, result, setFinalInputValue, setFinalSecondInput, setBmi}) {

  const units = contents.filter(obj => obj[clicked]).map((obj) => obj[clicked][1].units).flat()

  useEffect(() => {
    const validOptions = contents.find(obj => obj[clicked])?.[clicked][1].units || []; // get all units
    setUnitsFrom(validOptions[0].value); setUnitsTo(validOptions[1].value)
    // if the length is greater than 2 then set the first and the second units
    validOptions.length >= 2 && setSelectedFrom(validOptions[0].name); setSelectedTo(validOptions[1].name);
    validOptions.length >= 2 && setUnitsFrom(validOptions[0].value); setUnitsTo(validOptions[1].value);
  }, [clicked, contents]); 

  return (
    <div className={className}>
      <div className="max-[570px]:justify-center gap-2 flex max-[640px]:flex-col-reverse w-full">
        <div className="flex flex-col gap-2 items-center pt-4">
          <InputNumber weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} clicked={clicked} setInputValue={setInputValue} inputValue={inputValue} result={result} unitsFrom={unitsFrom}/>
        </div>
        <div className="w-full flex gap-2">
          <FirstUnit className="w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90 relative" contents={contents} clicked={clicked} selectedFrom={selectedFrom} setSelectedFrom={setSelectedFrom} selectedTo={selectedTo}  unitsFrom={unitsFrom} setUnitsFrom={setUnitsFrom} units={units}/>
          <SwitchButton selectedFrom={selectedFrom} selectedTo={selectedTo} setSelectedFrom={setSelectedFrom} setSelectedTo={setSelectedTo} unitsFrom={unitsFrom} setUnitsFrom={setUnitsFrom} unitsTo={unitsTo} setUnitsTo={setUnitsTo}/>
          <LastUnit className="w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90 text-[clamp(0.5rem,3rem,1rem)] relative" contents={contents} clicked={clicked} selectedTo={selectedTo} setSelectedTo={setSelectedTo} selectedFrom={selectedFrom} unitsTo={unitsTo} setUnitsTo={setUnitsTo} units={units}/>
          <input type="button" value="Convert" className="w-full max-[570px]:w-full h-12 rounded-lg bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150" onClick={() => Convert(clicked, inputValue, weight, height, selectedFrom, selectedTo, setResult, setFinalInputValue, setFinalSecondInput, setInputValue, setWeight, setHeight, setBmi)}/>
        </div>
      </div>
    </div>
  ) 
}