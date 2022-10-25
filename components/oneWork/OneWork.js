import React from 'react'
import RectDate from '../rectangles/RectDate'
import styles from './oneWork.module.css'

export default function OneWork({position, date, company, desc}) {
  return (
    <div classname={styles.container}>
        <h3>{position}</h3>
        <RectDate date={date} />
        {/* {date} */}
        <p className={styles.company}>{company}</p>
        <p>{desc}</p>
    </div>
  )
}
