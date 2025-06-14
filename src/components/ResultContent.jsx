
export default function ResultContent({ classname, result, finalInputValue, clicked, finalSecondInput, bmi }) {
  return ( 
    <div className={ classname }>
      {clicked === 'Temperature' && result ? 
        <div className="flex text-2xl border py-2 px-4 rounded-lg">
          <div>{finalInputValue}</div> 
          <div className="px-5">=</div> 
          <div>{result}</div>
        </div>
      : clicked === 'BMI' && result ? 
        <div className="flex flex-col gap-1">
          <div className="text-lg">{finalInputValue} = {finalSecondInput}</div>
          <div className="text-xl">{result}</div>
          <div className="text-xl">{bmi}</div>
        </div>
      : clicked === 'Time' && result ? 
        <div className="flex text-2xl border py-2 px-4 rounded-lg">
          <div>{finalInputValue}</div> 
          <div className="px-5">=</div> 
          <div>{result}</div>
        </div>
      : clicked === 'Math' && result ? 
        <div className="flex text-2xl border py-2 px-4 rounded-lg">
          <div>{finalInputValue}</div> 
          <div className="px-5">=</div> 
          <div>{result}</div>
        </div>
      : (clicked === 'Money' && result) && 
        <div className="flex text-2xl border py-2 px-4 rounded-lg">
          <div>{finalInputValue}</div> 
          <div className="px-5">=</div> 
          <div>{result}</div>
        </div>}
    </div>
  )
}