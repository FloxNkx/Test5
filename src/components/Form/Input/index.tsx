import React from 'react'
import styles from './styles.module.css'

const formatUSPhoneNumber = input => {
    const sanitizedInput = input.startsWith('+1') ? input : '+1 ' + input
    const digits = sanitizedInput.replace(/[^\d]/g, '').slice(1)

    let formattedNumber = '+1 '
    if (digits.length <= 3) {
        formattedNumber += digits
    } else if (digits.length <= 6) {
        formattedNumber += digits.slice(0, 3) + '-' + digits.slice(3)
    } else {
        formattedNumber +=
            digits.slice(0, 3) +
            '-' +
            digits.slice(3, 6) +
            '-' +
            digits.slice(6, 10)
    }

    return formattedNumber
}
interface InputProps {
    className?: string
    label?: string
    type?: string
    value?: string
    placeholder?: string
    icon?: React.ReactNode
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isRequired?: boolean
    readonly?: boolean
    errorMessage?: string
}

const Input: React.FC<InputProps> = ({
    className,
    label,
    type,
    value,
    placeholder,
    icon,
    onChange,
    isRequired,
    readonly,
    errorMessage,
}) => {
    const handleChange = event => {
        let newValue = event.target.value

        if (event.target.type === 'tel') {
            newValue = formatUSPhoneNumber(newValue)
        }

        onChange({ ...event, target: { ...event.target, value: newValue } })
    }

    return (
        <div className={`${styles.inputGroup} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.inputWrapper}>
                <input
                    className={`${styles.input} ${errorMessage ? styles.inputError : ''}`}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    required={isRequired}
                    onChange={handleChange}
                    readOnly={readonly}
                />
                {icon && <div className={styles.iconWrapper}>{icon}</div>}
                {errorMessage && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                )}{' '}
            </div>
        </div>
    )
}

export default Input
