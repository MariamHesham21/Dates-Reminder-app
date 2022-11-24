import React from 'react'

const Title = ({FakeData}) => {
  return (
    <div className='Title'>
            <h3> You Have <span>{FakeData.length}</span> Tasks</h3>
        </div>
  )
}

export default Title
