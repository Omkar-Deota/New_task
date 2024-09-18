import React from 'react'
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
const Feature = () => {
    const features = [
        {
          icon: <BotMessageSquare />,
          text: "Drag-and-Drop Interface",
          description:
            "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
        },
        {
          icon: <Fingerprint />,
          text: "Multi-Platform Compatibility",
          description:
            "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
        },
        {
          icon: <ShieldHalf />,
          text: "Built-in Templates",
          description:
            "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
        },
        {
          icon: <BatteryCharging />,
          text: "Real-Time Preview",
          description:
            "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
        },
        {
          icon: <PlugZap />,
          text: "Collaboration Tools",
          description:
            "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
        },
        {
          icon: <GlobeLock />,
          text: "Analytics Dashboard",
          description:
            "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
        },
      ];
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]' id="fs">
        <div className="text-center">
            <span className='bg-neutral-700 text-orange-500 rounded-full h-6 px-2 py-2 text-sm font-medium uppercase'>Features</span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl lg:mt-20 mt-10 tracking-wide'>Easily build your 
            
            <span className='bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text'>{" "}ArEnA</span> </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
    {features.map((feature,index)=>(
        <div key={index} className='w-full sm:w-1/2 lg:w-1/3 '>
            <div className="flex">
                <div className="flex mx-6 h-10 w-10 bg-neutral-900 text-orange-500 rounded-full justify-center items-center">
                    {feature.icon}
                </div>
                <div>
                    <h5 className="mt-1 mb-5 text-xl">{feature.text}</h5>
                    <p className='text-neutral-700 text-md p-2 mb-10'>{feature.description}</p>
                </div>
            </div>
        </div>
    ))}
        </div>
    </div>
  )
}

export default Feature