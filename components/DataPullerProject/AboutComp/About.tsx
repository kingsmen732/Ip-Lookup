import React from "react";
import Img from "../../smallComp/image/Img";
export default function About() {
  return (
    <div className="w-full h-full py-8 md:px-8 flex md:flex-row flex-col md:space-x-12 items-center space-y-4">
      <div className="flex-none  w-32 lg:w-44 flex justify-center items-center">
        <Img src="myprofile.png" alt="About picture" className="opacity-80" />
      </div>
      <div className="flex flex-col space-y-8  items-center">
        <span className="font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-100">
          What is this about ? 🤔
        </span>
        <span className="font-sans   sm:text-base text-sm text-gray-200 text-justify">
        Guess what? The moment you hop online, websites start snooping on you! 🎉 No matter how tight you lock down your browser,
        some info slips through. Your IP address? Yeah, it’s like your digital name tag, telling sites where you’re chilling.
        All these little nuggets of info come together to create your online "fingerprint." Websites use this to build a profile on you,
        so they can sling ads your way or tweak your experience. <b> Pretty wild, huh? 😎 </b> <br /></span>

        <span className = " text-center"> <b>Pro tip: Use a VPN to route your traffic and keep your location on the down low. Stay stealthy! 🕵️‍♂️ </b> </span>

        
      </div>
    </div>
  );
}
