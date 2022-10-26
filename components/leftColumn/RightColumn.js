import React from 'react'
import Fin from '../fin/Fin'
import WorkExp from '../workExp/WorkExp'
import styles from './leftColumn.module.css'
import cn from 'classnames'
import Pet from '../pet/Pet'

export default function RightColumn() {
    return (
        <div className={cn(styles.container, styles.rContainer)}>
            <WorkExp />
            <Pet />
            <Fin />
        </div>
    )
}