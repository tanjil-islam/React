import Content from './Content'
import React from 'react'

export default class Section extends React.Component {
  shouldComponentsUpdate() {
    return false
  }
  render() {
    console.log('Section render')
    return (
      <div>
        <h1>This is a section</h1>
        <Content />
      </div>
    )
  }
}
