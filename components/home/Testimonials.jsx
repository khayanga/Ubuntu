import React, { useEffect } from 'react';
import { Quote, Star, User } from 'lucide-react';
import { Card,CardContent } from '../ui/card';
import { animate, inView ,stagger} from 'framer-motion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { testimonials } from '@/data';

const TestimonialCard = ({ quote, author, role, company, rating }) => {
    return (
      <Card className="border-none shadow-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm overflow-hidden h-full">
        <CardContent className="p-8 relative h-full flex flex-col">
          <div className="absolute -top-6 -left-6 w-16 h-16 text-blue-100 dark:text-blue-900/50 opacity-60">
            <Quote size={64} className="rotate-180" />
          </div>
  
          <div className="flex mb-4 relative z-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={`${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'} mr-1`}
              />
            ))}
          </div>
  
          <blockquote className="text-lg mb-6 text-gray-700 dark:text-gray-200 relative z-10 flex-grow">
            "{quote}"
          </blockquote>
  
          <div className="flex items-center border-t border-gray-100 dark:border-gray-700/50 pt-4 mt-auto">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sky-600 dark:text-blue-400 mr-3">
              <User size={18} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{role}, {company}</p>
            </div>
          </div>
  
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to--blue-300"></div>
        </CardContent>
      </Card>
    );
  };
  
  const Testimonials = () => {
    useEffect(() => {
      inView('.testimonials-section', ({ target }) => {
        animate(
          target.querySelectorAll('.animate-item'),
          {
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
          },
          {
            delay: stagger(0.1),
            duration: 0.8,
            easing: [0.25, 0.1, 0.25, 1]
          }
        );
  
        return () => {};
      });
    }, []);
  
    return (
      <section className=" bg-gray-50 dark:bg-gray-900/30 lg:py-32 md:py-24 py-16 mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
  
        <div className=" relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sky-600 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 mb-4 animate-item">
              <span className="text-sm font-medium">Customer Stories</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-sky-600 animate-item">
              Trusted by Organizations Worldwide
            </h2>
            <p className="text-gray-600 dark:text-gray-300 animate-item">
              See what our customers have to say about our water management solutions.
            </p>
          </div>
  
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto animate-item"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                  <div className="h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-2">
              <CarouselPrevious className=" static -translate-y-0 h-10 w-10 rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20" />
              <CarouselNext className="static -translate-y-0 h-10 w-10 rounded-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/20" />
            </div>
          </Carousel>
  
          
        </div>
      </section>
    );
  };
  
 
  
  export default Testimonials;