
import React from "react"
import boldInsideStrings from "../utils/formatter/BoldInsideStrings"

export default function TitleContent({ classname, contents, clicked }) {
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
              {boldInsideStrings(obj[clicked][0].subtitle)}
            </div>
          </React.Fragment>
          ))}
      </div>
    </div>
  )
}