import React from 'react'

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props
    const { change: nextChange, locale: nextLocale } = nextProps

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false
    }
    return true
  }

  render() {
    const { change, locale, show } = this.props
    return (
      <>
        <button type='button' onClick={() => change(locale)}>
          {locale === 'bn-BD' ? 'Click Here' : 'এখানে ক্লিক করুন'}
        </button>
        {show && <p>Hello Tanjil </p>}
      </>
    )
  }
}

export default Button