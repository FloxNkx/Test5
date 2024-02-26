import React, { ReactNode } from 'react'
import styles from './styles.module.css'

interface TooltipProps {
    text: string
    children: ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className={`tooltip_wrapper ${styles.tooltip}`}>
            {children}
            <span className={styles.tooltipText}>{text}</span>
        </div>
    )
}

export default Tooltip
