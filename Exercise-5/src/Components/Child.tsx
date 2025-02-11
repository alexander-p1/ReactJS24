import React from 'react'

interface ChildProps {
    energyValue: number;
}

const Child: React.FC<ChildProps> = ({ energyValue }) => {
  return (
    <div>
        {energyValue > 9000 ? "Energy: It's over 9000!" : "Energy too low.."}
    </div>
  )
}

export default Child