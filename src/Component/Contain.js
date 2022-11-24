import React from 'react'


const Contain = ({FakeData}) => {
    return (
        <div className='Square'>
                 {FakeData.length ? (FakeData.map((item)=>{
                    return( 
                    <div className='box'>
                        <img src={item.img} alt='photo1'/>
                        <div className='Text'>
                            <p> {item.name} </p>
                            <p><span>Time :</span> {item.date}</p>
                        </div>
                    </div>
                    )
                 })) : <h2 className='null'> There Aren<span>'</span>t Tasks</h2>}
                
                
                
            </div>
      )
}

export default Contain
