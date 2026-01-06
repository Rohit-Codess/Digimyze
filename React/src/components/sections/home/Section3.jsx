import React from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Supplies King',
    image: '/portfolio/supplies-king.gif',
    alt: 'https://digimyze.com/wp-content/uploads/2025/08/Supplies-King.png',
  },
  {
    id: 2,
    title: 'Pizzorama',
    image: 'https://digimyze.com/wp-content/uploads/2025/08/Copy-of-portfolio.gif',
    alt: 'Pizzorama - Food service',
  },
  {
    id: 3,
    title: 'Toscana',
    image: 'https://digimyze.com/wp-content/uploads/2025/08/Toscana-Portfolio-Video.gif',
    alt: 'Toscana - Italian restaurant',
  },
  {
    id: 4,
    title: 'Riverview Finserve',
    image: 'https://digimyze.com/wp-content/uploads/2025/08/Riverview-Finserve.png',
    alt: 'Riverview Finserve - Financial services',
  },
]

const Section3 = () => {
  return (
    <section className="bg-[#FDF8F3] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-200 mb-4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x450?text=' + item.title
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 group-hover:text-[#D2483C] transition-colors duration-200">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a
            href="#portfolio"
            className="text-base sm:text-lg font-medium text-gray-900 hover:text-[#D2483C] transition-colors duration-200 underline decoration-2 underline-offset-4"
          >
            View All Work
          </a>
          <button
            type="button"
            className="rounded-full bg-[#1A1A1A] px-10 py-4 text-base font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Lets Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3
