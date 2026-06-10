import React from 'react'
function ShowCount({ count, title }) {
  console.log(`${title} component rendered`)

  return (
    <p>
      {title}: {count}
    </p>
  )
}

export default React.memo(ShowCount)
