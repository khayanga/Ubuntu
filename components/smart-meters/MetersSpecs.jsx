import React from 'react'
import { Tabs,TabsContent,TabsTrigger,TabsList } from '../ui/tabs'
import WaterMeterSpecs from './Specs'

const MetersSpecs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 ">
    <div className="container">
      <h2 className="text-2xl font-bold mb-8 text-center text-sky-600">Technical Details</h2>
      <Tabs defaultValue="specifications" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <WaterMeterSpecs />
        </TabsContent>
        <TabsContent value="applications" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-sky-600">Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Residential</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Single-family homes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Apartment buildings with individual metering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Vacation properties with remote monitoring</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Commercial</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Office buildings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Hotels and hospitality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Retail establishments</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Industrial</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Manufacturing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Processing plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Industrial parks</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-100 rounded-lg p-5">
                <h4 className="font-medium text-lg mb-2">Utility & Municipal</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>City-wide metering programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>District metering areas (DMAs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-600 mr-2">✓</span>
                    <span>Water supply monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="installation" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-sky-600">Installation & Maintenance</h3>
            <p className=" text-gray-600 dark:text-gray-300 mb-4">
              The Ubuntu Smart Water Meter is designed for easy installation by certified plumbers.
              The standard installation process takes approximately 1-2 hours and requires minimal 
              disruption to your water service.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Installation Process:</h4>
              <ol className="space-y-2 ml-6 list-decimal">
                <li className="text-gray-600 dark:text-gray-300">Water supply shutdown</li>
                <li className="text-gray-600 dark:text-gray-300">Removal of existing meter (if applicable)</li>
                <li className="text-gray-600 dark:text-gray-300">Installation of Ubuntu Smart Meter with appropriate fittings</li>
                <li className="text-gray-600 dark:text-gray-300">System testing and leak check</li>
                <li className="text-gray-600 dark:text-gray-300">Digital activation and connection to network</li>
                <li className="text-gray-600 dark:text-gray-300">Setup of customer monitoring account</li>
              </ol>
            </div>
            
            <div className="space-y-4 mt-6">
              <h4 className="font-medium text-lg">Maintenance Requirements:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Battery replacement: Once every 5+ years (model dependent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Firmware updates: Automatic over-the-air updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Physical inspection: Recommended annually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">Calibration check: Every 5 years (or as required by local regulations)</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
  )
}

export default MetersSpecs