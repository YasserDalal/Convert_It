
import { useState } from "react"

export default function TopContent() {
  const [clicked, setClicked] = useState('Temperature');
  return (
    <div className="flex justify-between px-10 h-full max-[810px]:px-4">
      <div className="font-tab italic text-4xl flex items-center">
        <div>Convert It</div>
      </div>
      <div className="hidden max-[720px]:block">Hi</div>
      <div className="flex gap-3 items-center text-lg max-[720px]:hidden">
        <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === 'Temperature' ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button">Temperature</div>
        <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === 'BMI' ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button">BMI</div>
        <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === 'Time' ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button">Time</div>
        <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === 'Math' ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button">Math</div>
        <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === 'Money' ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button">Money</div>
      </div>
    </div>
  )
}