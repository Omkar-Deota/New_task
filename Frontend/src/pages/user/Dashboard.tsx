import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import useSubscriptionApi from "../../hooks/api/useSubscriptionApi";
import LoggedInBar from "../../component/common/LoggedInBar";
import { useUserContext } from "../../context/UserProvider";
interface PricingOption {
    title: string;
    price: string;
    features: string[];
  }
  
const Dashboard = () => {
    const [pricingOptions, setPricingOptions] = useState<PricingOption[]>([]);
    const {getAllSubscription} = useSubscriptionApi();
  const fetchPricingOptions = async () => {
    try {
      const response= await getAllSubscription();
      setPricingOptions(response.data as PricingOption[]); 
    } catch (error) {
      console.error("Error fetching pricing options:", error);
    }
  };
  const {userName} = useUserContext();
  useEffect(() => {
    fetchPricingOptions();
  }, []);
  return (
    <>
      <LoggedInBar/>
      <div className="max-w-6xl mx-auto pt-10 px-5">
        <h2 className="text-center tracking-wider bg-gradient-to-b from-blue-100 to-blue-500 bg-clip-text text-transparent sm:text-xl lg:text-5xl">
            Hey, {userName} welcome!!
        </h2>
      <div className="mt-20" id="ps">
        <div className="w-full border-neutral-500 border-2"></div>
      <h2 className=" sm:text-3xl lg:text-5xl text-center my-8 tracking-widest">
      <span className="bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-5xl shadow-xl ">
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
