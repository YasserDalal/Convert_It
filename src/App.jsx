
import { useState, useEffect } from "react"
import generateData from "./data/Data"

import TopLayout from "./shared/layouts/TopLayout"
import CenterLayout from "./shared/layouts/CenterLayout"

import saveStorage from "./localStorage/saveStorage"
import getStorage from "./localStorage/getStorage"

export default function App({ className }) {
  // get the data from local storage
  const [navigatorNames, setNavigatorNames] = useState(getStorage('navigatorNames'));
  const [contents, setContents] = useState(getStorage('contents'));
  const [clicked, setClicked] = useState(getStorage('clicked') || 'Temperature');
  const [result, setResult] = useState();
  const [open, setOpen] = useState(false);
  // generate the data
  useEffect(() => { 
    generateData()
      .then(data => {setNavigatorNames(data[0].navigatorNames); setContents(data[1].contents);})
        .catch(err => console.log('.then() is failing, so go to this function and check the code, console.log() each lines \n error: ', err));
  }, []);
  // save the data when we refresh
  useEffect(() => { saveStorage('navigatorNames', navigatorNames) }, [navigatorNames]);
  useEffect(() => { saveStorage('contents', contents) }, [contents]);
  useEffect(() => { saveStorage('clicked', clicked) }, [clicked]);

  return (
    <div className={className}>
      <TopLayout className="fixed top-0 left-16 right-16 h-16 rounded-bl-lg rounded-br-lg bg-gray-800 shadow-[1px_1px_10px_1px] shadow-[#040404f1] max-[440px]:left-10 max-[440px]:right-10 z-50" navigatorNames={navigatorNames} clicked={clicked} setClicked={setClicked} setResult={setResult} open={open} setOpen={setOpen}/>
      <div className='h-full' onClick={() => setOpen(false)}>
        <CenterLayout className={`bg-gray-900 h-full w-full flex items-center max-[1174px]:content-start ${open && ` brightness-75`}`} contents={contents} clicked={clicked} result={result} setResult={setResult}/>
      </div>
    </div>
  )
}