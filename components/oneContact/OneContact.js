import React from 'react'
import styles from './oneContact.module.css'


export default function OneContact({title, desc, icon, link}) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
        <a href={link}><img src={icon} className={styles.img}/></a>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
            {desc}
        </div>
    </div>
  )
}
