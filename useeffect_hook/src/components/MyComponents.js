import { useState, useEffect } from 'react'

export default function MyComponents() {
  const [count, setCount] = useState(0)

  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    console.log(`updating title with count ${count}`)
    document.title = `Clciked ${count} times`
  }, [count])

  useEffect(() => {
    console.log('Setting up timer')
    const interval = setInterval(tick, 1000)

    //stop the timer
    return () => {
      console.log('Clearing timer')
      clearInterval(interval)
    }
  }, [])

  const addClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type='button' onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  )
}
