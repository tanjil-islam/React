import { useState } from 'react'
import MyComponent from './components/MyComponents'

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <div>
        {show && <MyComponent />}
        <p>
          <button
            type='button'
            onClick={() => setShow((prevShow) => !prevShow)}
          >
            {show ? 'Hide' : 'Show'}
          </button>
        </p>
      </div>
    </div>
  )
}
