import React from 'react'
import styles from './skill.module.css'

export default function Skill(props) {
    const {img, title} = props;
  return (
    <div className={styles.container} >
        <img src={img} className={styles.img}/>
        <div className={styles.title}>{title}</div>
    </div>
  )
}
