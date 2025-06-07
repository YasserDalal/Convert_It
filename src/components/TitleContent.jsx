
export default function TitleContent({ classname }) {
  return (
    <div className={ classname }>
      <div className="flex flex-col">
        <div className="pb-3 text-[clamp(1.5rem,8vw,2.8rem)]">Temperature Converter</div>
        <div className="text-xl text-[clamp(0.72rem,3vw,1rem)]">Enter the temperature, select units and submit.</div>
      </div>
    </div>
  )
}