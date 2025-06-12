
import ClickedNav from "../events/NavButtons/ClickedNav";

export default function TopContent({ className, navigatorNames, clicked, setClicked }) {
  return (
    <div className={className}>
      <div className="font-tab italic text-4xl flex items-center">
        <div>Convert It</div>
      </div>
      <div className="hidden max-[720px]:block">Hi</div>
      <div className="flex gap-3 items-center text-lg max-[720px]:hidden">
        {navigatorNames.map((item, index) => (
          <div className={`hover:text-white transition-colors duration-150 px-2 py-4 ${clicked === `${item.name}` ? 'text-white select-none':'text-[#b0b0b0] cursor-pointer'}`} typeof="button" onClick={() => ClickedNav(setClicked, item)} key={index}>{item.name}
          </div>
        ))}
      </div>
    </div>
  )
}