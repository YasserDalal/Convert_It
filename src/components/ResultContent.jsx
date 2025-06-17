
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
        <div className="flex flex-col gap-2 items-center">
          <div className="text-lg flex gap-2">
            <div>{finalInputValue}</div>
            <div>=</div>
            <div className="font-bold">{finalSecondInput}</div>
          </div>
          <div className="text-lg flex gap-2">
            <div>BMI</div> 
            <div>=</div>
            <div className="font-bold">{result}</div>
          </div>
          <div className={`text-xl text-center border py-2 px-4 rounded-lg ${(result >= 25 || result <= 18) ? 'border-red-400' : 'border-green-400'}`}>{bmi}</div>
        </div>
      : clicked === 'Time' && result ? 
        <div className="flex text-2xl border py-2 px-4 rounded-lg">
          <div>{finalInputValue}</div> 
          <div className="px-5">=</div> 
          <div>{result}</div>
        </div>
      : clicked === 'Length' && result ? 
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