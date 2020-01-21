import React from 'react'

function Layout({ children }) {
  return (
    <div className="bg-gray-200 h-screen flex flex-row items-center justify-center">
      {children}
    </div>
  )
}

export default Layout

