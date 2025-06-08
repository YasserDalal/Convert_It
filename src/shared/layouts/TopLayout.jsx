
import TopContent from "../../components/TopContent"
export default function TopLayout({ navigatorNames, clicked, setClicked }) {
  return (
    <div className="fixed top-0 left-16 right-16 h-16 rounded-bl-lg rounded-br-lg bg-gray-800 shadow-[1px_1px_10px_1px] shadow-[#040404f1] max-[440px]:left-10 max-[440px]:right-10">
      <TopContent navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked}/>
    </div>
  )
}