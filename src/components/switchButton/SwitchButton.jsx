
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function SwitchButton({ selectedFrom, selectedTo, setSelectedFrom, setSelectedTo }) {
  return (
    <button className="w-16 max-[520px]:w-full h-12 rounded-full bg-gray-800 cursor-pointer hover:bg-slate-700 transition-all duration-150" onClick={() => {setSelectedFrom(selectedTo); setSelectedTo(selectedFrom)}}>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </button>
  )
} 