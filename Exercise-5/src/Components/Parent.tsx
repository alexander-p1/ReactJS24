import React from 'react'
import Child from './Child'

interface ParentProps {
    energyValue: number;
}

const Parent: React.FC<ParentProps> = ({ energyValue }) => {
  return (
    <div>
        <Child energyValue={energyValue} />
    </div>
  )
}

export default Parent