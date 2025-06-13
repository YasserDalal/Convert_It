
export default function LastUnit({className, selectedTo, selectedFrom, setSelectedTo, unitsTo, setUnitsTo, units }) {
  return (
    <div className={className}>
      <div className="absolute -top-7 left-0 right-0 text-center">{unitsTo}</div>
      <select name="cars" className="w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 relative" onChange={(e) => {
        units.find(unit => unit.name === e.target.value && setUnitsTo(unit.value))
        setSelectedTo(e.target.value)}} 
        value={selectedTo} style={{ backgroundImage: 'none', WebkitAppearance: 'none', MozAppearance: 'none',  appearance: 'none' }}>
        {units.filter(item => item.name !== selectedFrom)
              .map((item, index) => <option value={item.name} key={index}>{item.name}</option>)}
      </select> 
    </div>
  )
}