import React, { ChangeEventHandler } from 'react'
import styles from './styles.module.css'

interface CheckboxProps {
    className?: string
    id: string
    text?: string
    name?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    checked?: boolean
    value?: any
}

const Checkbox: React.FC<CheckboxProps> = ({
    className,
    id,
    text,
    name,
    onChange,
    checked,
    value,
}) => {
    return (
        <label
            htmlFor={id}
            className={`${styles.checkboxLabel} ${className || ''}`}
        >
            <input
                className={styles.checkboxInput}
                type='checkbox'
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.checkboxText}>{text}</span>
        </label>
    )
}

export default Checkbox
