
import { useState } from "react"

export default function LastUnit({className, selectedTo, selectedFrom, setSelectedTo, unitsTo, setUnitsTo, units }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-7 left-0 right-0 text-center">{unitsTo}</div>
      <div className="w-full h-12 rounded-lg px-2 bg-gray-700 text-white flex items-center justify-between cursor-pointer select-none"
        onClick={() => setOpen(!open)}>{selectedTo}</div>
      {open && (
        <div className="absolute left-0  top-full mt-1 w-full max-h-40 overflow-y-auto bg-gray-800 rounded-lg z-50 shadow-lg my-scrollbar">
          {units.filter(item => item.name !== selectedFrom)
              .map((item, index) => <div key={index} className={`px-3 py-2 hover:bg-gray-600 cursor-pointer ${item.name === selectedTo ? "opacity-50" : ""}`}
                onClick={() => {
                  console.log(item.name)
                  if (item.name !== selectedTo) {
                    setSelectedTo(item.name);
                    setUnitsTo(item.value);
                    setOpen(false);
                  }}}>{item.name}</div>)}
            </div>)}
    
    </div>
  )
}