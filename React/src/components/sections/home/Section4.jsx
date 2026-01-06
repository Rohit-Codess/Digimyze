import React, { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: '01',
    title: 'Search engine Optimization',
    items: [
      'Local SEO',
      'Shopify SEO',
      'WordPress SEO',
      'E-Commerce SEO',
      'Google My Business SEO Services',
    ],
    image: 'https://digimyze.com/wp-content/uploads/2025/08/1-1.png',
  },
  {
    id: '02',
    title: 'Website Development',
    items: [
      'WordPress Website Design',
      'Shopify Website Design',
      'WooCommerce Website Development',
      'Landing Page Design',
      'Website Redesign Services',
    ],
    image: 'https://digimyze.com/wp-content/uploads/2025/08/2-1.png',
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    items: [
      'Facebook Marketing',
      'Instagram Marketing',
      'LinkedIn Marketing',
      'YouTube Marketing',
      'Influencer Marketing',
    ],
    image: 'https://digimyze.com/wp-content/uploads/2025/08/3-1.png',
  },
  {
    id: '04',
    title: 'Graphic Designing',
    items: [
      'Poster and Business Card Design',
      'Menu Design (Restaurants & Cafes)',
      'Social Media Post Design',
      'Banner & Billboard Design',
      'Website Graphics & UI Elements',
    ],
    image: 'https://digimyze.com/wp-content/uploads/2025/08/4.png',
  },
  {
    id: '05',
    title: 'Online Advertising',
    items: [
      'Google Ads Management',
      'Facebook Ads Management',
      'Instagram Ads Management',
      'YouTube Ads Management',
    ],
    image: 'https://digimyze.com/wp-content/uploads/2025/08/5.png',
  },
]

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 py-8 lg:py-12 transition-all duration-700 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Number and Content */}
      <div className="flex-1 w-full lg:w-auto">
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
          {/* Number */}
          <div className="text-3xl sm:text-4xl font-light text-gray-400">
            ({service.id})
          </div>

          {/* Service Info */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx} className="text-base text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="w-full lg:w-64 xl:w-80 shrink-0">
        <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-linear-to-br from-orange-500 to-red-600">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/30 to-red-600/30" />
        </div>
      </div>
    </div>
  )
}

const Section4 = () => {
  const headerRef = useRef(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeaderVisible(entry.isIntersecting)
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (headerRef.current) {
      observer.observe(headerRef.current)
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current)
      }
    }
  }, [])

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headerRef}
          className={`mb-12 lg:mb-16 transition-all duration-700 ease-in-out ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900">
            Complex
            <br />
            proficiency
          </h2>
        </div>

        {/* Services List */}
        <div className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section4
