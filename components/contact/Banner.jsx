import React from "react";
import Decoration from "../Decoration";

const Banner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <Decoration />
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 ">Get In Touch With Us</h2>
          <p className="text-blue-100 mb-8">
            Have questions about our smart water meters or ATMs? Our team is
            here to help you find the right solution for your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
