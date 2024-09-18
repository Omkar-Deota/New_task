import DataSection from "./component/DataSection"
import Feature from "./component/Feature"
import Footer from "./component/Footer"
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
    <Footer />
    </div>
    <div className="flex justify-center items-center mt-auto " id="ct">&copy; Developed By Omkar | xyz.techy@cient.in | +0558264 123</div>
    </>
  )
}

export default App
