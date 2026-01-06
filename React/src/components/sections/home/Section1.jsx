import React from 'react'

const Section1 = () => {
  return (
    <section className="bg-[#FDF8F3] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                Digital Marketing <br />
                That Delivers{' '}
                <span className="inline-flex items-center">
                  <span className="bg-[#D2483C] text-white font-bold text-2xl sm:text-4xl lg:text-5xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block animate-bounce-subtle">
                    DIGI
                  </span>
                </span>
                <br />
                Results
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in delay-300">
              <button
                type="button"
                className="rounded-full border-2 border-gray-900 bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Contact
              </button>
              <button
                type="button"
                className="rounded-full bg-[#1A1A1A] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Lets Talk
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div className="space-y-1 sm:space-y-2 animate-scale-in delay-400">
                <div className="text-4xl sm:text-7xl lg:text-8xl font-bold text-gray-900 animate-count-up">
                  98%
                </div>
                <div className="text-sm sm:text-lg lg:text-xl text-gray-700">
                  Client Satisfaction
                </div>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1 sm:space-y-2 animate-scale-in delay-500">
                <div className="text-4xl sm:text-7xl lg:text-8xl font-bold text-gray-900 animate-count-up">
                  120+
                </div>
                <div className="text-sm sm:text-lg lg:text-xl text-gray-700">
                  Projects Delivered<br />Globally
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="pt-6 sm:pt-8 border-t border-gray-300 animate-fade-in delay-600">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                Beyond visibility, towards growth—marketing that delivers sales, not just screen time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
