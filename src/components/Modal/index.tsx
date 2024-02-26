import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.css'

const CloseIcon = (color: string = 'white') => {
    return (
        <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill={color}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M14.2986 12.4717L24.6334 2.13688C24.8376 1.8984 24.9443 1.59162 24.9322 1.27787C24.9201 0.964117 24.79 0.666492 24.568 0.444469C24.346 0.222446 24.0483 0.0923789 23.7346 0.08026C23.4208 0.068141 23.1141 0.174863 22.8756 0.379098L12.5408 10.7139L2.20601 0.366631C1.97126 0.131881 1.65287 0 1.32089 0C0.9889 0 0.670511 0.131881 0.435761 0.366631C0.201011 0.601381 0.0691293 0.919771 0.0691293 1.25176C0.0691293 1.58374 0.201011 1.90213 0.435761 2.13688L10.783 12.4717L0.435761 22.8065C0.305259 22.9182 0.199267 23.0557 0.124439 23.2104C0.0496105 23.3651 0.00756058 23.5335 0.000928998 23.7052C-0.00570258 23.8769 0.0232267 24.0481 0.0859018 24.2081C0.148577 24.3681 0.243645 24.5134 0.365137 24.6349C0.48663 24.7564 0.631925 24.8514 0.791902 24.9141C0.951879 24.9768 1.12309 25.0057 1.29477 24.9991C1.46646 24.9924 1.63493 24.9504 1.78959 24.8756C1.94426 24.8007 2.08179 24.6947 2.19355 24.5642L12.5408 14.2295L22.8756 24.5642C23.1141 24.7685 23.4208 24.8752 23.7346 24.8631C24.0483 24.851 24.346 24.7209 24.568 24.4989C24.79 24.2768 24.9201 23.9792 24.9322 23.6655C24.9443 23.3517 24.8376 23.0449 24.6334 22.8065L14.2986 12.4717Z'
                fill='white'
            />
        </svg>
    )
}

const Modal = props => {
    const { isOpen, setIsOpen, children, propsClass, closeBtnColor } = props
    const [pageScrollPosY, setPageScrollPosY] = useState(0)

    useEffect(() => {
        setPageScrollPosY(window.scrollY)
        if (isOpen === false) {
            document.body.setAttribute('style', `overflow-y: scroll`)
        } else {
            document.body.setAttribute('style', `overflow-y: hidden`)
        }
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className={`${styles.modalWrapper}`}>
                    <div className={`${styles.modal}`}>
                        <dialog className={`${styles.modalDialog}`}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type='button'
                                className={`${styles.closeBtn}`}
                            >
                                {CloseIcon(closeBtnColor)}
                            </button>
                            <div className={`${styles.modalContent} ${propsClass}`}>
                                {children}
                            </div>
                        </dialog>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${styles.modalBg}`}
                        ></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
