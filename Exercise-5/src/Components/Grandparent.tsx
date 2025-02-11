import React from 'react'
import Parent from './Parent'

const Grandparent: React.FC = () => {
  return (
    <div>
        <Parent energyValue={Math.floor(Math.random() * 10000)} />
    </div>
  )
}

export default Grandparent