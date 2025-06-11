
import NumberInput from "../../utils/formatter/NumberInput";

export default function InputNumber({ inputValue, setInputValue }) {
  return (
    <input type="text" inputMode="decimal" pattern="^\d{1,3}(\.\d{0,2})?$" maxLength={6} value={inputValue}  
                 className="w-28 max-[520px]:w-[30%] h-12 rounded-lg bg-gray-700 px-2 text-white text-center text-2xl outline-none focus:shadow-xl focus:shadow-[#000000] cursor-pointer transition-all duration-150 hover:brightness-90" onInput={(e) => NumberInput(e, setInputValue)} placeholder="0.00"/>
  )
}