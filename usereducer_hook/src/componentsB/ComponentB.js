import { useContext } from 'react'
import { counterContext } from '../App'

export default function ComponentA() {
  const countContext = useContext(counterContext)

  return (
    <div>
      <p>Component A</p>
      {/* Changed from 'Component A' to 'Component B' so it matches */}
      <button
        type='button'
        onClick={() => countContext.countDispatch('increment')}
      >
        Increment
      </button>
      <button
        type='button'
        onClick={() => countContext.countDispatch('decrement')}
      >
        Decrement
      </button>
    </div>
  )
}
