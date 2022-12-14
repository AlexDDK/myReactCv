import React from 'react';
import styles from './oneContact.module.css';
import cn from 'classnames';


export default function OneContact({title, desc, icon, link, cls}) {
  const tgm = cls ? styles.tgm : styles.img
  return (
    <div className={styles.container}>
      
        <div className={styles.icon}>
        <a href={link} className={tgm}><img src={icon} className={styles.img}/></a>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
            {desc}
        </div>
    </div>
  )
}
