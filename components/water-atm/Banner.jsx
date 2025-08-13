import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import { atmFeatures } from "@/data";
import Decoration from "../Decoration";
import Image from "next/image";
import ProductCustomizer from "../product-customizer/ProductCustomizer";

const Banner = () => {
  return (
    <section className="py-16 md:py-16 relative overflow-hidden">
      <Decoration />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-6">
              Water ATMs
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Our water ATMs aim to promote enterprenuership, sustainability and efficency in the water sector
              .It fosters accounatability and transparency in water distribution,in terms of sales translating into volumes
              to the expected revenue expected of the business. 
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <ProductCustomizer
                productName="Smart Water ATM"
                productType="ATM"
                features={atmFeatures}
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

          
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px]">
            <Image
              src="/images/banner-atm.png"
              alt="Smart water management technology"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;