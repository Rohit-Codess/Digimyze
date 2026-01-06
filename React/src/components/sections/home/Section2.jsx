import React from 'react'

const Section2 = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              DIGIMYZE
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Digimyze isn't just another Digital Marketing Company in India—we see ourselves as your growth partner. We play with Search Engine Optimization, Social Media Marketing, Web Designing that click, and Graphic Designings that talk. Long-term growth? Yeah, that's the only game we play.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              type="button"
              className="rounded-full bg-[#1A1A1A] px-10 py-4 text-base font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
            <button
              type="button"
              className="rounded-full bg-[#1A1A1A] px-10 py-4 text-base font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Lets Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
