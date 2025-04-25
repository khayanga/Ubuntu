import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Success = () => {
    const successStories = [
        {
          title: "Marsabit Community",
          description: "Ubuntu Waterhub ATMs brought reliable water access to remote households, eliminating long-distance water fetching for families.",
          image: "/images/success1.jpg",
          author: "Maria Rodriguez",
          role: "Community Development Officer",
          company: "Marsabit Water Initiative"
        },
        {
          title: "Makueni Project",
          description: "Our smart ATMs transformed public water access in Makueni, ensuring fair distribution and reducing downtime at communal taps.",
          image: "/images/success2.jpg",    
          author: "John Thompson",
          role: "City Water Manager",
          company: "Watertown Municipality"
        },
        {
          title: "Masimba Community",
          description: "The community now enjoys consistent water supply through our smart ATMs, with automated tracking ensuring sustainable usage.",
          image: "/images/success5.jpg",
          author: "Sarah Chen",
          role: "Project Coordinator",
          company: "Community Water Alliance"
        }
      ];
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sky-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sky-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from real clients. See how Ubuntu Waterhub Africa is transforming water management across industries.
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2">
                <Card className="overflow-hidden border-none rounded-md shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="relative h-72 w-full overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-sky-500">
                          {story.title}
                        </h3>
                       
                          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            {story.description}
                          </p>
                        
                        {/* <div className="flex items-center gap-3 border-t pt-4 border-gray-200 dark:border-gray-700">
                          <Avatar className="border-2 border-white">
                            <AvatarImage src={story.image} alt={story.author} />
                            <AvatarFallback>{story.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{story.author}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{story.role}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{story.company}</p>
                          </div>
                        </div> */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-sky-300"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className=" static -translate-y-0 h-12 w-12 rounded-full border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-sky-800 dark:text-sky-400 dark:hover:bg-sky-900/20" />
            <CarouselNext className=" static -translate-y-0 h-12 w-12 rounded-full border-sky-200 text-sky-700 hover:bg-sky-50 dark:border-sky-800 dark:text-sky-400 dark:hover:bg-sky-900/20" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Success