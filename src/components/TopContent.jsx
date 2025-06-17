
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ClickedNav from "../events/NavButtons/ClickedNav";

export default function TopContent({ className, navigatorNames, clicked, setClicked, setResult, open, setOpen}) {
  return (
    <div className={className}>
      <div className="font-tab italic text-4xl flex items-center">
        <div>Convert It</div>
      </div>
      <div className="relative hidden max-[720px]:block left-0 right-0 z-50">
        <FontAwesomeIcon icon={faBars} className="text-white text-4xl cursor-pointer absolute right-1 top-3" onClick={() => setOpen(!open)}/>
      </div>
      <div className={`bg-[#444] z-40 flex flex-col justify-center items-center gap-2 absolute top-16 right-0 transition-all duration-100 ease-in-out rounded-bl-xl rounded-br-xl ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
          {navigatorNames && navigatorNames.map((item, index) => (
          <div className={`hover:text-white transition-colors duration-150 px-10 py-4 text-2xl w-full text-center  ${clicked === `${item.name}` ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button" onClick={() => {
            ClickedNav(setClicked, item)
            setOpen(!open)
            setResult()
            }} key={index}>{item.name}
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-center text-lg max-[720px]:hidden">
        {navigatorNames && navigatorNames.map((item, index) => (
          <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === `${item.name}` ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button" onClick={() => {
            ClickedNav(setClicked, item)
            setResult()
            }} key={index}>{item.name}
          </div>
        ))}
      </div>
    </div>
  )
}