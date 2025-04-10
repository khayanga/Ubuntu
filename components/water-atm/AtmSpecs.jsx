import React from 'react'
import Specs from './Specs'
import { Tabs,TabsContent,TabsTrigger,TabsList } from '../ui/tabs'

const AtmSpecs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
    <div className="container">
      <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">Technical Details</h2>
      <Tabs defaultValue="specifications" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
          <TabsTrigger value="service">Service & Support</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <Specs />
        </TabsContent>
        <TabsContent value="use-cases" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-sky-600">Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Urban Communities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Residential neighborhoods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Apartment complexes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Housing societies</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Public Spaces</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Parks and recreational areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Transport hubs and stations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Shopping malls</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Educational Institutions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>School campuses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>College facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>University housing</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Rural Applications</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Villages without reliable water infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Community centers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Healthcare facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="service" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-sky-600">Service & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-lg mb-3">Installation Services</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Site assessment and consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Complete installation by certified technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Water quality testing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Staff training for basic operation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3">Maintenance Packages</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Scheduled filter replacements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Regular sanitization and cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Periodic water quality testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">System performance optimization</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3">Technical Support</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">24/7 remote monitoring and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Phone and email support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Emergency response service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Software updates and enhancements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3">Business Support</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Revenue management consultancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Marketing and awareness materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Usage analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Community engagement programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
  )
}

export default AtmSpecs