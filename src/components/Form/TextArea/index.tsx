import React from 'react'
import styles from './styles.module.css'

interface TextAreaProps {
    className?: string
    label?: string
    value?: string
    placeholder?: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: React.FC<TextAreaProps> = ({
    className,
    label,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div className={`${styles.inputGroup} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                className={styles.textarea}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default TextArea
