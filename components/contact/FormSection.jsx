import React from "react";
import { Card, CardContent } from "../ui/card";
import { ContactForm } from "../forms/ContactForm";
import { LuBuilding, LuClock, LuMail, LuPhone } from "react-icons/lu";
import Map from "./Map";

const FormSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container relative z-10">
        {/* Left Col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-6 sm:p-8 border border-border/50 shadow-xl hover-glow rounded-xl animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3 text-sky-600">
                Reach Out to Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mb-6"></div>
              <p className="text-muted-foreground">
                Fill out the form below, and our team will get back to you
                within 24 hours.
              </p>
            </div>
            <ContactForm />
          </Card>

          {/* Right Col */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h2 className="text-3xl font-bold mb-3 text-sky-600">
                Contact Information
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mb-6"></div>

              <Card className="border border-border/50 overflow-hidden rounded-xl shadow-lg animate-fade-in">
                <CardContent className="p-0">
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    <div className="p-6 flex flex-col items-center text-center hover:bg-muted/50 transition-colors group">
                      <div className="h-14 w-14 rounded-full flex items-center justify-center bg-sky-100 dark:bg-gray-800 text-sky-700 mb-4 group-hover:bg-sky-200 transition-colors">
                        <LuBuilding size={28} />
                      </div>
                      <h3 className="font-medium text-lg mb-2">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Avon Center.
                        <br />
                        Industrial Area
                        <br />
                        Nairobi,Kenya
                        <br />
                      </p>
                    </div>

                    <div className="p-6 flex flex-col items-center text-center hover:bg-muted/50 transition-colors group">
                      <div className="h-14 w-14 rounded-full flex items-center justify-center bg-sky-100 dark:bg-gray-800 text-sky-700 mb-4 group-hover:bg-sky-200 transition-colors">
                        <LuPhone size={28} />
                      </div>
                      <h3 className="font-medium text-lg mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="#"
                          className="hover:text-sky-600 hover:underline block py-1"
                        >
                          Main: 0794093465
                        </a>
                        <a
                          href="#"
                          className="hover:text-sky-600 hover:underline block py-1"
                        >
                          Support: 0794093465
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
                    <div className="p-6 flex flex-col items-center text-center hover:bg-muted/50 transition-colors group">
                      <div className="h-14 w-14 rounded-full flex items-center justify-center bg-sky-100 dark:bg-gray-800 text-sky-700 mb-4 group-hover:bg-sky-200 transition-colors">
                        <LuMail size={28} />
                      </div>
                      <h3 className="font-medium text-lg mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="#"
                          className="hover:text-sky-600 hover:underline block py-1"
                        >
                          General:info@waterhub.africa
                        </a>
                        <a
                          href="#"
                          className="hover:text-sky-600 hover:underline block py-1"
                        >
                          Sales:info@waterhub.africa
                        </a>
                      </p>
                    </div>

                    <div className="p-6 flex flex-col items-center text-center hover:bg-muted/50 transition-colors group">
                      <div className="h-14 w-14 rounded-full flex items-center justify-center bg-sky-100 dark:bg-gray-800 text-sky-700 mb-4 group-hover:bg-sky-200 transition-colors">
                        <LuClock size={28} />
                      </div>
                      <h3 className="font-medium text-lg mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:30 PM EAT (UTC+3)
                        <br />
                        Saturday: 10:00 AM - 2:00 PM EAT (UTC+3)
                        <br />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
