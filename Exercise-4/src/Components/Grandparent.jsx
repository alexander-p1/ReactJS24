import React from 'react'
import Parent from './Parent'

const Grandparent = () => {
  return (
    <div>
      <Parent message={'Hej mitt barnbarn!'} />
    </div>
  )
}

export default Grandparent