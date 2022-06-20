import React from 'react'

import { useMyHook } from 'react-github-user-stats'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
