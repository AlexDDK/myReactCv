import React from 'react'
import styles from './oneContact.module.css'


export default function OneContact(props) {
    const {title, desc, icon} = props
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            <img src={icon} className={styles.img}/>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
            {desc}
        </div>
    </div>
  )
}
