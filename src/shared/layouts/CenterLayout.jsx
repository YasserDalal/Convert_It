
import { useState } from "react"

import TitleContent from "../../components/TitleContent"
import InputContent from "../../components/InputContent"
import ResultContent from "../../components/ResultContent"

export default function CenterLayout({ className, contents, clicked, result, setResult }) {
  const [inputValue, setInputValue] = useState("");
  const [finalInputValue, setFinalInputValue] = useState("");
  const [finalSecondInput, setFinalSecondInput] = useState("");
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [weight, setWeight] = useState("65");
  const [height, setHeight] = useState("180");
  const [unitsFrom, setUnitsFrom] = useState()
  const [unitsTo, setUnitsTo] = useState()
  const [bmi, setBmi] = useState()
  return (
    <div className={className}>
      <div className="flex justify-between items-center max-[1344px]:flex-col min-w-[320px] w-full px-28 max-[1344px]:px-0 relative">
        <TitleContent classname={"pb-28 max-[1344px]:pb-38 max-[1344px]:pr-0"} contents={contents} clicked={clicked}/>
        <ResultContent classname={"absolute -bottom-36 left-10 right-10 max-[1344px]:bottom-[30%] max-[1344px]:static max-[1344px]:left-0 max-[1344px]:right-0 max-[11344px]:pb-14  flex justify-center"} result={result} finalInputValue={finalInputValue} finalSecondInput={finalSecondInput} clicked={clicked} bmi={bmi}/>
        <InputContent className="flex gap-2 items-end max-[570px]:flex-col max-[700px]:w-[90%] w-[639px]" contents={contents} clicked={clicked} setResult={setResult} inputValue={inputValue} setInputValue={setInputValue} selectedFrom={selectedFrom} setSelectedFrom={setSelectedFrom} selectedTo={selectedTo} setSelectedTo={setSelectedTo} setWeight={setWeight} setHeight={setHeight} weight={weight} height={height} unitsFrom={unitsFrom} setUnitsFrom={setUnitsFrom} unitsTo={unitsTo} setUnitsTo={setUnitsTo} result={result} setFinalInputValue={setFinalInputValue} setFinalSecondInput={setFinalSecondInput} setBmi={setBmi}/>
      </div>
    </div>
  )
} 