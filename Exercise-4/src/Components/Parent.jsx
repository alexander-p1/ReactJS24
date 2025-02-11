import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <div>
        <Child message={props.message} />
    </div>
  )
}

export default Parent