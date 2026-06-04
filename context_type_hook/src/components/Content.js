import ThemeContext from '../contexts/themeContext'
import Counter from './Counter'
import HoverCounter from './HoverCounter'
import React from 'react'
import { useContext } from 'react'

export default function Content() {
  const context = useContext(ThemeContext)
  const { theme, switchTheme } = context

  console.log('Content render')

  return (
    <div>
      <h1>This is a content</h1>

      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  )
}

Content.contextType = ThemeContext
