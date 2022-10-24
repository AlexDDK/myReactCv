import React from 'react'
import RectRight from '../rectangles/RectRight'
import styles from './stack.module.css'
import iconReact from '../../src/img/react-original.svg'
import iconRedux from '../../src/img/redux-original.svg'
import iconJs from '../../src/img/javascript-original.svg'
import iconGit from '../../src/img/github-original.svg'
import iconHtml from '../../src/img/html-or.svg'
import iconCss from '../../src/img/css-or.svg'
import Skill from '../skill/Skill'

export default function Stack() {
  return (
    <div className={styles.container} >
        <h2>стек</h2>
        <RectRight />
      <div className={styles.stackContainer}>
        <Skill img={iconJs} title='JavaScript'/>
        <Skill img={iconReact} title='React' />
        <Skill img={iconRedux} title='Redux' />
        <Skill img={iconGit} title='Git' />
        <Skill img={iconHtml} title='Html' />
        <Skill img={iconCss} title='Css' />
        
      </div>
    </div>
    )
}
