import React from 'react'
import styles from './rect.module.css'

export default function RectDate({date}) {
  return (
    <div className={styles.rectDate}>
        {date}
    </div>
  )
}
