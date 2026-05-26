import React from 'react'
import ReactDOM from 'react-dom/client'

const index = 0
const root = ReactDOM.createRoot(document.getElementById('root'))

setInterval(() => {
  const element = (
    <h1 className='heading' tabIndex={index}>
      <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  )
  root.render(element)
}, 1000)
