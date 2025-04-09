import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data";

const Products = () => {
  return (
    <section className=" lg:py-32 md:py-24 py-16  px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-sky-600">
            Our Smart Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our range of innovative products designed for efficient and
            sustainable water management
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                product.reverse
                  ? ""
                  : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
              }`}
            >
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-sky-600">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-sky-600 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-200 text-sky-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Link
                      href={product.link}
                      className="inline-flex items-center"
                    >
                      Explore {product.title}
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg bg-blue-50 dark:bg-gray-800">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`${product.imageClass} p-4`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
