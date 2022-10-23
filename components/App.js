import React from 'react'
import myFoto from '../src/img/cdvd.jpg'

export default function App() {
  return (
    <div className='container'>
        {/* <div className='foto-cell'> one </div> */}
        <div className='foto-cell'>
          <img src={myFoto} className='myFoto'/>
        </div>
        <div> two </div>
        <div> three </div>
        <div> four </div>
    </div>
  )
}

