import React from 'react'
import RectRight from '../rectangles/RectRight'
import styles from './edu.module.css'

export default function Edu() {
  return (
    <div className={styles.container} >
        <h2>Образование</h2>
        <RectRight />
        <div className={styles.edu}>
          <span>высшее техническое</span>
        <h3>Инженер электронной техники</h3>
        <div className={styles.univ}>Томский Университет систем управления и радиоэлектроники</div>
        <p>2002-2007</p>
        </div>
        
        <div className={styles.edu}>
        <span>высшее экономическое</span>
        <h3>экономист</h3>
        <div className={styles.univ}>Томский Государственный Университет</div>
        <p>2010-2013</p>
        </div>
    </div>
  )
}
