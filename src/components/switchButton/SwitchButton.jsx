
export default function SwitchButton({ selectedFrom, selectedTo, setSelectedFrom, setSelectedTo }) {
  return (
    <button className="w-28 max-[520px]:w-full h-12 rounded-lg bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150" onClick={() => {setSelectedFrom(selectedTo); setSelectedTo(selectedFrom)}}>Switch</button>
  )
} 