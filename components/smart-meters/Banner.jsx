'use client'
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { technologyContent, waterMeterFeatures } from "@/data";
import ProductCustomizer from "../Customizer";
import Decoration from "../Decoration";
const Banner = ({technology="NB-IoT"}) => {
  const content = technologyContent[technology] || technologyContent["NB-IoT"];
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <Decoration />

      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-blue-100 mb-8">{content.description}</p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <ProductCustomizer
              productName={`${technology} Smart Water Meter`}
              productType={technology.toLowerCase().replace(/\s+/g, "-")}
              features={waterMeterFeatures}
            />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="dark:border-blue-200 dark:text-blue-100 border-blue-700 text-blue-300 bg-gray-900 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
