import React, { useState, ChangeEvent } from 'react'
import styles from './styles.module.css'

interface FileUploadProps {
    className?: string
    label?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isRequired?: boolean
    validationMessage?: string
    submitAttempted?: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({
    className,
    label,
    onChange,
    isRequired,
    validationMessage,
    submitAttempted,
}) => {
    const [fileText, setFileText] = useState('Select file...')
    const [isFileSelected, setIsFileSelected] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        const fileCount = files?.length || 0

        let text = 'No file selected'
        if (fileCount === 1) {
            text = files[0].name
        } else if (fileCount > 1) {
            text = `${fileCount} files selected`
        }

        setFileText(text)
        setIsFileSelected(fileCount > 0)

        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={`${styles.inputGroup} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.fileUploadWrapper} data-text={fileText}>
                <input
                    onChange={handleInputChange}
                    className={styles.input}
                    type='file'
                    multiple={true}
                />
            </div>
            {isRequired && !isFileSelected && submitAttempted && (
                <div className={styles.validationMessage}>
                    {validationMessage || 'File is required'}
                </div>
            )}
        </div>
    )
}

export default FileUpload
