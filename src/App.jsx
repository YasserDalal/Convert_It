
import TopLayout from "./shared/layouts/TopLayout"
import CenterLayout from "./shared/layouts/CenterLayout"
import { useState } from "react"
import { Data } from "./data/Data"
export default function App() {
  const [navigatorNames, setNavigatorNames] = useState(Data[0].navigatorNames);
  const [contents, setContents] = useState(Data[1].contents);
  const [clicked, setClicked] = useState('Temperature');
  console.log(contents)
  console.log(clicked)
  return (
    <div className="bg-gray-900 h-screen text-white min-w-[320px] max-w-full w-full">
      <TopLayout navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked}/>
      <CenterLayout contents={contents} clicked={clicked}/>
    </div>
  )
}