import React from 'react'
import styles from './foto.module.css'
import myFoto from '../../src/img/cdvd.jpg'
import RectFoto from '../rectangles/RectFoto'

export default function Foto() {
    return(
        <div className={styles.fotoCell}>
          <img src={myFoto} className={styles.myFoto}/>
          <RectFoto />
        </div>
    )
}


