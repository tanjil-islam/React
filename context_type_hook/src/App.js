import React from 'react'
import ClickCounter from './components/ClickCounter'
import Counter from './components/Counter'
import ThemeContext from './contexts/themeContext'
import Section from './components/Section'

export default class App extends React.Component {
  state = {
    theme: 'light',

    switchTheme: () => {
    this.setState(({ theme }) => {
      if (theme === 'dark') {
        return { theme: 'light' }
      } else {
        return { theme: 'dark' }
      }
    })
  }
  }

  

  render() {
    

    return (
      <div className='App'>
        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>

        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    )
  }
}
