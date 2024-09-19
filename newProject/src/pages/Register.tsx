import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import RegisterUser from '../component/RegisterUser'

const Register = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <RegisterUser/>
    <Footer/>
    </div>
    <div className="flex justify-center items-center mt-auto sm:text-xl sm:mt-10 lg:text-xl sm:px-4 sm:md-2" id="ct">&copy; Developed By Omkar | xyz.techy@cient.in | +0558264 123</div>
    </>
  )
}

export default Register