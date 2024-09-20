import React, { useEffect, useState } from "react";

import Navbar from "../component/Navbar";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";
interface PricingOption {
    title: string;
    price: string;
    features: string[];
  }
  
const Dashboard = () => {
    const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);
  
  const fetchPricingOptions = async () => {
    try {
      const response = await axios.get("https://virtuality-backend.onrender.com/pricing-options"); 
      console.log(response.data)
      setPricingOptions(response.data); 
    } catch (error) {
      console.error("Error fetching pricing options:", error);
    }
  };

  useEffect(() => {
    fetchPricingOptions();
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-6 mx-auto">
      <div className="flex justify-center items-center text-2xl mt-10 sm:mt-5 sm:text-xl">
        <h2 className="text-3xl sm:text-2xl lg:text-3xl text-center tracking-wider">
          <span className="bg-gradient-to-b from-blue-100 to-blue-950 bg-clip-text text-transparent text-3xl sm:text-xl">
            {localStorage.getItem("newUser")}
          </span>
        </h2>
      </div>
      <div className="mt-20" id="ps">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-widest">
      <span className="bg-gradient-to-b from-blue-300 to-blue-900 bg-clip-text text-transparent text-3xl shadow-xl ">
            Choose your plan
          </span>
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-5 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-6">
                {option.title}
              </p>
              <p className="mb-8">
                <span className="text-3xl mt-6 mr-2 text-orange-600">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-900 
                to-orange-400 border border-neutral-300 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
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
