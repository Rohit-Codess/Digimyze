import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Column 1 - Subscription & Locations */}
          <div className="space-y-6">
            <div className="text-sm text-gray-600">
              By subscribing you agree with our{' '}
              <a href="#privacy" className="underline text-gray-900 hover:text-[#D2483C]">
                Privacy Policy
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Locations</h3>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2A2A2A] transition-colors duration-200">
                  Pune
                </button>
                <button className="rounded-full bg-[#1A1A1A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2A2A2A] transition-colors duration-200">
                  Mumbai
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-900 pt-4">
              Contact : <a href="tel:+919137984491" className="hover:text-[#D2483C]">+91 9137984491</a>
            </div>
          </div>

          {/* Column 2 - Quick Links & Social Media Marketing */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Link's</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">About</a></li>
                <li><a href="#services" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media Marketing</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Facebook Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Instagram Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">LinkedIn Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">YouTube Marketing</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Influencer Marketing</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3 - Graphic Design & Website Development */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Graphic Design</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Poster and Business Card Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Menu Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Social Media Post Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Banner & Billboard Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Website Graphics & UI Elements</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Development</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">WordPress Website Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Shopify Website Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">WooCommerce Website Development</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Landing Page Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Website Redesign Services</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4 - Search Engine Optimization */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Engine Optimization</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Local SEO</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Shopify SEO</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">WordPress SEO</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">E-Commerce SEO</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Google My Business SEO Services</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5 - Online Advertising */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Online Advertising</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Google Ads Management</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Facebook Ads Management</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">Instagram Ads Management</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#D2483C] transition-colors">YouTube Ads Management</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-gray-900">
            © 2025 DIGIMYZE. All right reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
