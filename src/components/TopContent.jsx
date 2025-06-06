
export default function TopContent() {
  return (
    <div className="flex justify-between px-10 h-full">
      <div className="font-tab italic text-4xl flex items-center">
        <div>Convert It</div>
      </div>
      <div className="flex gap-4 items-center text-lg">
        <div className="cursor-pointer">Temperature</div>
        <div className="cursor-pointer">BMI</div>
        <div className="cursor-pointer">TIME</div>
        <div className="cursor-pointer">MATH</div>
        <div className="cursor-pointer">MONEY</div>
      </div>
    </div>
  )
}