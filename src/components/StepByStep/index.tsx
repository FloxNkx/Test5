import React, { useState } from 'react'
import styles from './styles.module.css'

// Define interface for Icon props
interface IconProps {
    isOpen: boolean
    isDisabled: boolean
}

const Icon: React.FC<IconProps> = ({ isOpen, isDisabled }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='11'
            height='11'
            viewBox='0 0 11 11'
            fill='none'
            className={isOpen ? 'translate' : ''}
        >
            <path
                d='M0.963478 0.640165L9.62554 9.30222V1.8776L10.6226 1.81396V11.0064H1.43017L1.49381 10.0093H8.91843L0.256371 1.34727L0.963478 0.640165Z'
                fill={isDisabled ? '#787B8A' : '#FFF'}
            />
        </svg>
    )
}

interface StepByStepProps {
    className?: string
    stepNum: string
    title: string
    content: React.ReactNode
    active?: boolean
    disabled?: boolean
    onToggle?: () => void
}

const StepByStep: React.FC<StepByStepProps> = ({
    className,
    stepNum,
    title,
    content,
    active = false,
    disabled = false,
    onToggle,
}) => {
    return (
        <div className={`${styles.stepItem} ${className}`}>
            <div
                className={`${styles.stepHeader} ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
                onClick={() => !disabled && onToggle && onToggle()}
            >
                <div>
                    <div className={styles.stepNum}>{stepNum}</div>
                    <div className={styles.name}>{title}</div>
                </div>
                <div className={styles.openBtn}>
                    <Icon isOpen={active} isDisabled={disabled} />
                </div>
            </div>
            {active && <div className={styles.stepContent}>{content}</div>}
        </div>
    )
}

export default StepByStep
