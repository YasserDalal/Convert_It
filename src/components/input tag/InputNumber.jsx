
import { useState } from "react";
import NumberInput from "../../utils/formatter/NumberInput";

export default function InputNumber({ inputValue, setInputValue, weight, setWeight, height, setHeight, clicked, unitsFrom }) {
  const [placeholder, setPlaceholder] = useState("0.00");
  return (
    <div className="flex flex-col gap-2">
      {clicked !== "BMI" ? <input type="text" inputMode="decimal" pattern="^\d{1,3}(\.\d{0,2})?$" maxLength={6} value={inputValue}  
        className="w-28 max-[520px]:w-[30%] h-12 rounded-lg bg-gray-700 px-2 text-white text-center text-2xl outline-none focus:shadow-xl focus:shadow-[#000000] transition-all duration-150 hover:brightness-90" onInput={(e) => NumberInput(e, setInputValue)} onFocus={() => setPlaceholder()} onBlur={() => setPlaceholder("0.00")} placeholder={placeholder}/>
      : (<> 
          <div className="relative flex">
            <input type="text" inputMode="decimal" pattern="^\d{1,3}(\.\d{0,2})?$" maxLength={6} value={weight}  
            className="w-36 h-12 rounded-lg bg-gray-700 px-2 text-white text-2xl outline-none focus:shadow-xl focus:shadow-[#000000] transition-all duration-150 hover:brightness-90" onInput={(e) => NumberInput(e, setWeight)}/>
            <div className="absolute top-3 right-2 text-sm">{unitsFrom}</div>
          </div>
          <div className="relative flex">
            <input type="text" inputMode="decimal" pattern="^\d{1,3}(\.\d{0,2})?$" maxLength={6} value={height}  
            className="w-36 h-12 rounded-lg bg-gray-700 px-2 text-white text-2xl outline-none focus:shadow-xl focus:shadow-[#000000] transition-all duration-150 hover:brightness-90" onInput={(e) => NumberInput(e, setHeight)}/>
            <div className="absolute top-4 right-2 text-sm text-">cm</div>
          </div>
        </>)}
    </div>
  
  )
}