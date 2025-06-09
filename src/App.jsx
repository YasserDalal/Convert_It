import { useState, useEffect } from "react"
import { Data } from "./data/Data"

import TopLayout from "./shared/layouts/TopLayout"
import CenterLayout from "./shared/layouts/CenterLayout"

import saveStorage from "./localStorage/saveStorage"
import getStorage from "./localStorage/getStorage"

export default function App() {
  // get the data from local storage
  const [navigatorNames] = useState(getStorage('navigatorNames') || Data[0].navigatorNames);
  const [contents] = useState(getStorage('contents') || Data[1].contents);
  const [clicked, setClicked] = useState(getStorage('clicked') || 'Temperature');

  // save the data when we refresh
  useEffect(() => { saveStorage('navigatorNames', navigatorNames) }, [navigatorNames]);
  useEffect(() => { saveStorage('contents', contents) }, [contents]);
  useEffect(() => { saveStorage('clicked', clicked) }, [clicked]);

  return (
    <div className="bg-gray-900 h-screen text-white min-w-[320px] max-w-full w-full">
      <TopLayout navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked}/>
      <CenterLayout contents={contents} clicked={clicked}/>
    </div>
  )
}