import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
class Clock extends React.Component {
  render() {
    return (
      <h1 className='heading'>
        <span className='text'>
          Hello, world! {this.props.children}{' '}
          {new Date().toLocaleTimeString(this.props.locale)}.
        </span>
      </h1>
    )
  }
}

root.render(<Clock locale='bn-BD'>It is now - </Clock>)
