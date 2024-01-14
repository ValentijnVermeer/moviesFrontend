import React from 'react'

function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-black-900 min-w-screen">
    <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
    </div>
    </div>
  )
}

export default LoadingPage