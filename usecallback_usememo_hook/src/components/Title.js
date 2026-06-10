import React from 'react'

function Title() {
  console.log('Title component rendered')

  return <h2>UseCallback and UseMemo Hooks </h2>
}

export default React.memo(Title)
