import React from 'react'
import '../style/home.css'
import fondo from '../assets/fondo.jpeg'


const home = () => {
  return (
    <div>
      <div className='content_portada'>
        <img src={fondo} alt=''/>
      </div>
    </div>
  )
}

export default home