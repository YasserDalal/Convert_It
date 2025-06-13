
export default function FirstUnit({className, selectedFrom, setSelectedFrom, selectedTo, unitsFrom, setUnitsFrom, units }) {
  return (
    <div className={className}>
      <div className="absolute -top-7 left-0 right-0 text-center">{unitsFrom}</div>
      <select name="cars" className="w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 relative" onChange={(e) => {
        units.find(unit => unit.name === e.target.value && setUnitsFrom(unit.value))
        setSelectedFrom(e.target.value)}} 
        value={selectedFrom} style={{ backgroundImage: 'none', WebkitAppearance: 'none', MozAppearance: 'none',  appearance: 'none' }}>
        {units.map((item, index) => 
          <option value={item.name} key={index} disabled={item.name === selectedTo}>{item.name}</option>)}
      </select>
    </div>
  )
} 