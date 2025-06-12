
export default function LastUnit({ contents, clicked, selectedTo, selectedFrom, setSelectedTo }) {
  return (
    <select name="cars" className="w-28 max-[520px]:w-full h-12 rounded-lg px-2 bg-gray-700 text-white focus:shadow-xl cursor-pointer transition-all duration-150 hover:brightness-90 outline-none" onChange={(e) => setSelectedTo(e.target.value)} value={selectedTo} 
      style={{ backgroundImage: 'none', WebkitAppearance: 'none', MozAppearance: 'none',  appearance: 'none' }}>
      {contents.filter(obj => obj[clicked])
        .map((obj) => obj[clicked][1].units
          .filter(item => item.name !== selectedFrom)
            .map((item, index) => (
              <option value={item.name} key={index}>{item.name}</option>)))}
    </select> 
  )
}