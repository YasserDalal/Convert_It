
import TopContent from "../../components/TopContent"

export default function TopLayout({ className, navigatorNames, clicked, setClicked, setResult, open, setOpen}) {
  return (
    <div className={className}>
      <TopContent className="flex justify-between px-10 h-full max-[810px]:px-4" navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked} setResult={setResult} open={open} setOpen={setOpen}/>
    </div>
  )
}