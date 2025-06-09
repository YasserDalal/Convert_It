
import TitleContent from "../../components/TitleContent"
import InputContent from "../../components/InputContent"
export default function CenterLayout({ contents, clicked }) {
  return (
    <div className="h-full w-full flex items-center max-[1174px]:content-start">
      <div className="flex justify-between items-center max-[1174px]:flex-col min-w-[320px] w-full px-28 max-[1174px]:px-0">
        <TitleContent classname={"pb-28 max-[1174px]:pb-40 max-[1174px]:pr-0"} contents={contents} clicked={clicked}/>
        <InputContent contents={contents} clicked={clicked}/>
      </div>
    </div>
  )
} 