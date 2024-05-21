import React from 'react'

const Items = ({id, text, deleteButton}) => {
  return (
    <div className='flex justify-between'>
      {text}
      <button onClick={() => deleteButton(id)}>Delete</button>
    </div>
  )
}

export default Items
