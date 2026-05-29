import React from 'react'

export default class Form extends React.Component {
  state = {
    title: 'Tanjil',
    text: 'javascript is awesome',
    library: 'react',
    isAwesome: true,
  }

  handleChange = (event) => {
    if (event.target.type === 'text') {
      this.setState({ title: event.target.value })
    } else if (event.target.type === 'textarea') {
      this.setState({ text: event.target.value })
    } else if (event.target.type === 'select-one') {
      this.setState({ library: event.target.value })
    } else if (event.target.type === 'checkbox') {
      this.setState({ isAwesome: event.target.checked })
    } else {
      console.log('nothing here')
    }
  }

  submitHandler = (e) => {
    const { title, text, library, isAwesome } = this.state
    e.preventDefault()
    console.log(`Title: ${title}
Text: ${text}
Library: ${library}
Is Awesome: ${isAwesome}`)
  }

  render() {
    const { title, text, library, isAwesome } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            placeholder='Enter your name'
            value={title}
            onChange={this.handleChange}
          />
          <p>{title}</p>
          <br />
          <textarea name='text' value={text} onChange={this.handleChange} />

          <br />
          <select value={library} onChange={this.handleChange}>
            <option value='react'>React</option>
            <option value='vue'>Vue</option>
            <option value='angular'>Angular</option>
          </select>
          <p>{library}</p>
          <br />
          <input
            type='checkbox'
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
