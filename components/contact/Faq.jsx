import React from "react";
import { Card, CardContent } from "../ui/card";
import { faqItems } from "@/data";

const Faq = () => {

  return (
    <section className=" bg-gray-50 dark:bg-gray-900/30 lg:py-32 md:py-24 py-16 mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/10 dark:bg-sky-700/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-300/10 dark:bg-sky-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className=" relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 dark:bg-sky-900/30 dark:border-sky-800 dark:text-sky-300 mb-4 animate-item">
            <span className="text-sm font-medium">Faq's</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-sky-600 animate-item">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-item">
            Find answers to the most common questions about our products and
            services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-none shadow-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-sky-600 transition-colors">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">
                  {item.answer}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-sky-300"></div>
              </CardContent>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;