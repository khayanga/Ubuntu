import React from 'react'
import Decoration from '../Decoration'

const DemoBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
        <Decoration/>
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 ">
          Schedule A demo
        </h2>
        <p className="text-blue-100 mb-8">
        Experience our innovative water management solutions firsthand through a personalized demonstration.
        </p>
        
      </div>
    </div>
  </section>
  )
}

export default DemoBanner