
export default function FirstUnit({ contents, clicked, selectedFrom, setSelectedFrom, selectedTo }) {
  return (
    <select name="cars" className="w-28 max-[520px]:w-full h-12 rounded-lg px-2 bg-gray-700 text-white outline-none focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90" onChange={ (e) => setSelectedFrom(e.target.value)} 
      value={selectedFrom} 
      style={{ backgroundImage: 'none', WebkitAppearance: 'none',
                MozAppearance: 'none',  appearance: 'none' }}>
        {contents.filter(obj => obj[clicked]).map((obj) => obj[clicked][1].units
                  .map((item, index) => (
          <option value={item.name} key={index} disabled={item.name === selectedTo}>{item.name}</option>
        )))}
      </select>
  )
}