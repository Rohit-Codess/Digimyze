import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true, hasDropdown: false },
  { name: 'About Us', href: '#', current: false, hasDropdown: false },
  { 
    name: 'Services', 
    href: '#', 
    current: false, 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Development', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Digital Marketing', href: '#' },
    ]
  },
  { 
    name: 'Locations', 
    href: '#', 
    current: false, 
    hasDropdown: true,
    dropdownItems: [
      { name: 'New York', href: '#' },
      { name: 'London', href: '#' },
      { name: 'Tokyo', href: '#' },
      { name: 'Dubai', href: '#' },
    ]
  },
  { 
    name: 'Portfolio', 
    href: '#', 
    current: false, 
    hasDropdown: true,
    dropdownItems: [
      { name: 'Web Projects', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Branding', href: '#' },
      { name: 'Case Studies', href: '#' },
    ]
  },
  { name: 'Blogs', href: '#', current: false, hasDropdown: false },
  { name: 'Contact', href: '#', current: false, hasDropdown: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#FDF8F3] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="DIGI Tech Solutions"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <Menu as="div" className="relative" key={item.name}>
                  <MenuButton className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#D2483C] transition-colors duration-200">
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                  </MenuButton>
                  <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.name}>
                        <a
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D2483C] transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current 
                      ? 'text-[#D2483C] font-semibold' 
                      : 'text-gray-700 hover:text-[#D2483C]',
                    'px-3 py-2 text-sm font-medium transition-colors duration-200'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Lets Talk Button */}
          <div className="hidden lg:flex lg:items-center">
            <button
              type="button"
              className="rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Lets Talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#D2483C] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D2483C]">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 group-data-open:hidden" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6 group-data-open:block" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} className="space-y-1">
                <Disclosure>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#D2483C]">
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-1 pl-4">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[#D2483C]"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            ) : (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current 
                    ? 'bg-gray-100 text-[#D2483C] font-semibold' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#D2483C]',
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </DisclosureButton>
            )
          ))}
          {/* Mobile Lets Talk Button */}
          <div className="pt-4">
            <button
              type="button"
              className="w-full rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-medium text-white hover:bg-[#2A2A2A] transition-all duration-200 shadow-lg"
            >
              Lets Talk
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
