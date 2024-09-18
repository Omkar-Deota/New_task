import DataSection from "./component/DataSection"
import Feature from "./component/Feature"
import Navbar from "./component/Navbar"
import Pricing from "./component/Pricing"
import Workflow from "./component/Workflow"

function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <DataSection />
    <Feature />
    <Workflow />
    <Pricing />
    </div>
    </>
  )
}

export default App
