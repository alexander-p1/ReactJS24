import React from 'react'
import Parent from './Parent'

const Grandparent: React.FC = () => {
  return (
    <div>
        <Parent energyValue={9001} />
        <Parent energyValue={900} />
    </div>
  )
}

export default Grandparent