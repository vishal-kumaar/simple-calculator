import React from 'react'

export default function Footer(props) {
  return (
    <div className={`text-center mt-6 ${props.mode==="dark" ? "text-white": "text-black"} font-medium`}>
      Made with ❤ by Vishal
    </div>
  )
}
