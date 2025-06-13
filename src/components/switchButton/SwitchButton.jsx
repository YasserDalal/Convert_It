
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function SwitchButton({ selectedFrom, selectedTo, setSelectedFrom, setSelectedTo, unitsFrom, setUnitsFrom, unitsTo, setUnitsTo }) {
  return (
    <button className="w-44 h-12 rounded-full bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150" onClick={() => {setSelectedFrom(selectedTo); setSelectedTo(selectedFrom); setUnitsFrom(unitsTo); setUnitsTo(unitsFrom)}}>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </button>
  )
} 