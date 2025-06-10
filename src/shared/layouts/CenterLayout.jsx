
import TitleContent from "../../components/TitleContent"
import InputContent from "../../components/InputContent"

export default function CenterLayout({ className, contents, clicked }) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center max-[1174px]:flex-col min-w-[320px] w-full px-28 max-[1174px]:px-0">
        <TitleContent classname={"pb-28 max-[1174px]:pb-40 max-[1174px]:pr-0"} contents={contents} clicked={clicked}/>
        <InputContent className="flex gap-2 items-end max-[520px]:flex-col max-[520px]:w-[90%]" contents={contents} clicked={clicked}/>
      </div>
    </div>
  )
} 