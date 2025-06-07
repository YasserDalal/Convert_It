
export default function TitleContent({ classname }) {
  return (
    <div className={ classname }>
      <div className="flex flex-col">
        <div className="text-4xl pb-3 text-[clamp(1.2rem,6vw,2.5rem)]">Temperature Converter</div>
        <div className="text-xl text-[clamp(0.5rem,2.5vw,1rem)]">Enter the temperature, select units and submit.</div>
      </div>
    </div>
  )
}