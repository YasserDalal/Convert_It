
import React from "react"

export default function TitleContent({ classname, contents, clicked }) {
  contents.filter(obj => obj[clicked] && console.log(obj[clicked][0].title))
  return (
    <div className={ classname }>
      <div className="flex flex-col max-[560px]:px-5">
        { contents.filter(obj => obj[clicked]).map((obj, index) =>
          (
          <React.Fragment key={index}>
            <div className="pb-3 text-[clamp(1.5rem,8vw,2.8rem)] max-[560px]:text-center">
              {obj[clicked][0].title}
            </div>
            <div className="text-xl text-[clamp(0.73rem,3.5vw,1.1rem)] max-[560px]:text-center">
              Enter the temperature, select units and submit.
            </div>
          </React.Fragment>
          ))}
      </div>
    </div>
  )
}