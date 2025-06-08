
export default function TitleContent({ classname }) {
  return (
    <div className={ classname }>
      <div className="flex flex-col max-[560px]:px-5">
        <div className="pb-3 text-[clamp(1.5rem,8vw,2.8rem)] max-[560px]:text-center">Temperature Converter</div>
        <div className="text-xl text-[clamp(0.73rem,3.5vw,1.1rem)] max-[560px]:text-center">Enter the temperature, select units and submit.</div>
      </div>
    </div>
  )
}