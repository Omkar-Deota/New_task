import React from 'react'
import DataSection from "../../component/common/DataSection"
import Feature from "../../component/common/Feature"
import Footer from "../../component/common/Footer"
import Navbar from "../../component/common/Navbar"
import Pricing from "../../component/common/Pricing"
import Workflow from "../../component/common/Workflow"

const Home = () => {
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
    <div className="flex justify-center items-center mt-auto sm:text-xl sm:mt-10 lg:text-xl sm:px-4 sm:md-2" id="ct">&copy; Developed By Omkar | xyz.techy@cient.in | +0558264 123</div>
    </>
 )
}

export default Home