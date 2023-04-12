import React from 'react'

export const Navbar = () => {
  return (
    <nav className="ui-font-sans ui-flex ui-flex-row ui-text-center ui-sm:flex-row ui-sm:text-left ui-justify-between ui-py-4 ui-px-6 ui-bg-white ui-shadow sm:ui-items-baseline ui-w-full">
  <div className="ui-mb-2 ui-sm:mb-0">
    <a href="/" className="ui-text-2xl ui-no-underline ui-text-grey-darkest ui-hover:text-blue-dark">Home</a>
  </div>
  <div>
    <a href="/" className="ui-text-lg ui-no-underline ui-text-gray-800 hover:ui-text-blue-700 ui-mx-4">Web</a>
    <a href="/docs" className="ui-text-lg ui-no-underline ui-text-gray-800 hover:ui-text-blue-700 ui-mx-4">Docs</a>
  </div>
</nav>
  )
}