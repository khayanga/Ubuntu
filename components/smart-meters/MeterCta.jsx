import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { technologyContent, waterMeterFeatures } from "@/data";
import ProductCustomizer from "../Customizer";

const MeterCta = ({ technology = "NB-IoT" }) => {
  const content = technologyContent[technology] || technologyContent["NB-IoT"];
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-600 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
      </div>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 ">
            Ready to upgrade your water management?
          </h2>
          <p className="text-blue-100 mb-8">
            Customize your smart water meter solution and receive a personalized
            quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <ProductCustomizer
              productName={`${technology} Smart Water Meter`}
              productType={technology.toLowerCase().replace(/\s+/g, "-")}
              features={waterMeterFeatures}
            />
            <Button asChild variant="outline">
              <Link href="/schedule-demo">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeterCta;
