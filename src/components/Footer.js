import React from 'react'

export default function Footer(props) {
  return (
    <div className={`text-center mt-6 ${props.mode==="dark" ? "text-white": "text-black"} font-medium`}>
      Made with ❤ by <a className="text-green-600" href="https://github.com/vishalkumar08376" rel="noreferrer" target="_blank">Vishal</a>
    </div>
  )
}