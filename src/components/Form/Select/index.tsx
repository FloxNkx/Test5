import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

interface IconProps {
    isOpen: boolean
}

const Icon: React.FC<IconProps> = ({ isOpen }) => {
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
                fill='#18191E'
            />
        </svg>
    )
}

interface SelectProps {
    className?: string
    placeHolder?: string
    label?: string
    options: Array<{ label: string; value: string }>
    onChange: (value: any) => void
    value?: any
    align?: string
    isRequired?: boolean
    validationMessage?: string
    submitAttempted?: boolean
}

interface Option {
    label: string
    value: string
}

const Select: React.FC<SelectProps> = ({
    className,
    placeHolder,
    label,
    options,
    onChange,
    value,
    align,
    isRequired,
    validationMessage,
    submitAttempted,
}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState<Option | null>(null)
    const inputRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (value) {
            const selectedOption = options.find(
                option => option.value === value,
            )
            setSelectedValue(selectedOption || null)
        }
    }, [value, options])

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            // Use native DOM MouseEvent
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)
            ) {
                setShowMenu(false)
            }
        }

        window.addEventListener('click', handler)

        return () => {
            window.removeEventListener('click', handler)
        }
    }, [])

    const handleInputClick = () => {
        setShowMenu(!showMenu)
    }

    const getDisplay = (): string => {
        return selectedValue ? selectedValue.label : placeHolder || ''
    }

    const onItemClick = (option: Option) => {
        setSelectedValue(option)
        onChange(option.value)
    }
    const isSelected = (option: Option): boolean => {
        return selectedValue !== null && selectedValue.value === option.value
    }

    return (
        <div className={`${styles.selectGroup} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.dropdownContainer}>
                <div
                    ref={inputRef}
                    onClick={handleInputClick}
                    className={`${styles.dropdownInput} ${showMenu ? 'opened' : ''}`}
                >
                    <div
                        className={`${styles.dropdownSelectedValue} ${!selectedValue ? 'placeholder' : ''}`}
                    >
                        {getDisplay()}
                    </div>
                    <div className={styles.dropdownTools}>
                        <div className={styles.dropdownTool}>
                            <Icon isOpen={showMenu} />
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div
                        className={`${styles.dropdownMenu} alignment--${align || 'auto'}`}
                    >
                        {options.map(option => (
                            <div
                                onClick={() => onItemClick(option)}
                                key={option.value}
                                className={`${styles.dropdownItem} ${isSelected(option) ? 'selected' : ''}`}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {isRequired && !selectedValue && submitAttempted && (
                <div className={styles.validationMessage}>
                    {validationMessage || 'This field is required'}
                </div>
            )}
        </div>
    )
}

export default Select
