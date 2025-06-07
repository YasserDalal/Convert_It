
import TopLayout from "./shared/layouts/TopLayout"
import CenterLayout from "./shared/layouts/CenterLayout"
export default function App() {
  return (
    <div className="bg-gray-900 h-screen text-white min-w-[320px] max-w-full w-full">
      <TopLayout />
      <CenterLayout />
    </div>
  )
}