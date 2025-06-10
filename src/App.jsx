
import { useState, useEffect } from "react"
import { Data } from "./data/Data"

import TopLayout from "./shared/layouts/TopLayout"
import CenterLayout from "./shared/layouts/CenterLayout"

import saveStorage from "./localStorage/saveStorage"
import getStorage from "./localStorage/getStorage"

export default function App({ className }) {
  // get the data from local storage
  const [navigatorNames] = useState(getStorage('navigatorNames') || Data[0].navigatorNames);
  const [contents] = useState(getStorage('contents') || Data[1].contents);
  const [clicked, setClicked] = useState(getStorage('clicked') || 'Temperature');

  // save the data when we refresh
  useEffect(() => { saveStorage('navigatorNames', navigatorNames) }, [navigatorNames]);
  useEffect(() => { saveStorage('contents', contents) }, [contents]);
  useEffect(() => { saveStorage('clicked', clicked) }, [clicked]);

  return (
    <div className={className}>
      <TopLayout className="fixed top-0 left-16 right-16 h-16 rounded-bl-lg rounded-br-lg bg-gray-800 shadow-[1px_1px_10px_1px] shadow-[#040404f1] max-[440px]:left-10 max-[440px]:right-10" navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked}/>
      <CenterLayout className="h-full w-full flex items-center max-[1174px]:content-start" contents={contents} clicked={clicked}/>
    </div>
  )
}