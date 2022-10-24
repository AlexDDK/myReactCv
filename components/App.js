import React from 'react'
import Foto from './foto/Foto'
import LeftColumn from './leftColumn/LeftColumn'
import Title from './title/Title'

export default function App() {
  return (
    <div className='container'>
        <Foto />
        <Title />
        <LeftColumn />
        <div> four </div>
    </div>
  )
}

