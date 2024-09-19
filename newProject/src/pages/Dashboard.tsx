import React from "react";
import Navbar from "../component/Navbar";
import Pricing from "../component/Pricing";

const Dashboard = () => {


  return (
    <>
      <Navbar />
      <div className="felx justify-center items-center text-2xl mt-10 sm:mt-5 sm:text-xl">
        <h2 className="text-3xl sm:text-2xl lg:text-3xl text-center tracking-wider">
            <span className="bg-gradient-to-b from-blue-300 to-blue-700">{localStorage.getItem('newUser')}</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Pricing />
      </div>
      <div
        className="flex justify-center items-center mt-auto sm:text-xl sm:mt-10 lg:text-xl sm:px-4 sm:md-2"
        id="ct"
      >
        &copy; Developed By Omkar | xyz.techy@cient.in | +0558264 123
      </div>
    </>
  );
};

export default Dashboard;
