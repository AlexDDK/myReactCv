import React from 'react'
import OneContact from '../oneContact/OneContact'
import styles from './contacts.module.css'
import tgIcon from '../../src/img/tg2.svg'
import phoneIcon from '../../src/img/phone.svg'
import emailIcon from '../../src/img/email.svg'


export default function Contacts() {
  return (
    <div className={styles.container}>
        <OneContact title='Тел.' desc='8-999-824-32-33'icon={phoneIcon}/>
        <OneContact title='Email' desc='dhrsmp@ gmail.com' icon={emailIcon}/>
        <OneContact title='Telegram' desc='@Alexey_Han' icon={tgIcon}/>
        <OneContact />
        <OneContact />
      </div>
  )
}