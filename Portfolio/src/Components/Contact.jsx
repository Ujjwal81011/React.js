import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">Contact Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="flex-1">
                <h3>Let's Talk</h3>
                <p>I am a Front-end developer.</p>
                
            </div>
            <div className="flex-1 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
