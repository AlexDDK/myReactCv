import React from 'react'
import Contacts from '../contacts/Contacts'
import Edu from '../edu/Edu'
import Stack from '../stack/Stack'
import styles from './leftColumn.module.css'

export default function LeftColumn() {
  return (
    <div className={styles.container} >
        <Edu />
        <div className={styles.downContainer}>
          <Stack />
          <Contacts />
        </div>
    </div>
  )
}
