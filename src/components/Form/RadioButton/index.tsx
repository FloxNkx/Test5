import React, { ChangeEventHandler } from 'react'
import styles from './styles.module.css'

interface RadioButtonProps {
    className?: string
    id: string
    text?: string
    name?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    checked?: boolean
    value?: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
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
            className={`${styles.radioButtonLabel} ${className || ''}`}
        >
            <input
                className={styles.radioButtonInput}
                type='radio'
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={styles.radioButtonCustom}>{text}</span>
        </label>
    )
}

export default RadioButton
