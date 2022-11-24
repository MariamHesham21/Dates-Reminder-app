import React from 'react'

const Button = ({DeletData,ShowData}) => {
  return (
    <div className='ALL-BTN'>
            <button className='Show-data' onClick={ShowData}> SHOW DATA</button>
            <button className='Delete' onClick={DeletData}> Delete </button>
    </div>
  )
}

export default Button
