import React from 'react'
import DemoForm from '../forms/DemoForm'

const Form = () => {
  return (
    <section className="py-12 md:py-16 ">
    <div className="container">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-900/50 shadow-lg rounded-lg p-6 md:p-8 border dark:border-gray-700 ">
          <DemoForm />
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Have questions? Contact our demo team directly at <span className="text-sky-600">info@waterhub.africa</span> or call <span className="text-sky-600">0794093465</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Form