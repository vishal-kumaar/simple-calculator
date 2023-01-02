import React from 'react'

export default function Navbar(props) {
  return (
    <div className='flex justify-between px-2 bg-black flex-wrap'>
      <div className="text-black my-3 bg-white p-1 rounded-lg text-sm font-mono">
        Arithmatic Calculator
      </div>
      <label className="inline-flex relative items-center cursor-pointer my-3">
        <input type="checkbox" value="" className="sr-only peer" id="checkbox" onClick={props.toggleMode}/>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{props.mode==="dark" ? "Disable" : "Enable"} Dark Mode</span>
      </label>
    </div>
  )
}