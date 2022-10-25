import React from 'react';
import styles from './oneContact.module.css';
import cn from 'classnames';


export default function OneContact({title, desc, icon, link, cls}) {
  const tg = cls === 'tg' ? styles.tg : ''
  return (
    <div className={styles.container}>
      
        <div className={styles.icon}>
        <a href={link}><img src={icon} className={cn(styles.img, tg)} /></a>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
            {desc}
        </div>
    </div>
  )
}
