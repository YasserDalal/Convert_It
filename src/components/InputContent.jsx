
import { useState } from "react";
import NumberInput from "../utils/formatter/NumberInput";

export default function InputContent(){
  const [inputValue, setInputValue] = useState();
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  return (
    <div className="flex gap-2 items-end max-[520px]:flex-col max-[520px]:w-[90%]">
      <div className="w-full flex justify-center pb-4">
        <input type="text" inputMode="decimal" pattern="^\d{1,3}(\.\d{0,2})?$" maxLength={6} value={inputValue}  
             className="w-28 max-[520px]:w-[30%] h-12 rounded-lg bg-gray-700 px-2 text-white text-center text-2xl outline-none focus:shadow-xl focus:shadow-[#000000] cursor-pointer transition-all duration-150 hover:brightness-90" onInput={(e) => NumberInput(e, setInputValue)} placeholder="0.00"/>
      </div>
      <div className="max-[520px]:justify-center gap-2  flex max-[520px]:w-[100%]">
        <select name="cars" className="w-28 max-[520px]:w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90" onChange={
        (e) => setSelectedFrom(e.target.value)} value={selectedFrom} 
        style={{ backgroundImage: 'none', WebkitAppearance: 'none',
                  MozAppearance: 'none',  appearance: 'none' }}>
          <option value="" disabled hidden>From Unit</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" className="w-28 max-[520px]:w-full h-12 rounded-lg px-2 bg-gray-700 text-white focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90" onChange={
          (e) => setSelectedTo(e.target.value)} value={selectedTo} 
          style={{ backgroundImage: 'none', WebkitAppearance: 'none',
                    MozAppearance: 'none',  appearance: 'none' }}>
          <option value="" disabled hidden>To Unit</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <input type="button" value="Convert" className="w-28 max-[520px]:w-full h-12 rounded-lg bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150"/>
      </div>
    </div>
  ) 
}