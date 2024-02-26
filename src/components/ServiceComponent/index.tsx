import Link from 'next/link'
import global from '@/styles/global.module.css'
import styles from './styles.module.css'

const ServiceComponent = ({ id, key, name, text, img, link, btn }) => {
    return (
        <div key={key} className={`${styles.service}`}>
            <div className={styles.serviceBg}>{img}</div>
            <div className={styles.serviceContent}>
                <span className={styles.serviceName}>{name}</span>
                <span className={styles.serviceText}>{text}</span>
                {link && link.href ? (
                    <Link
                        href={link.href}
                        onClick={link.onClick}
                        data-service-id={id}
                        className={styles.serviceLink}
                    >
                        {link.text}
                    </Link>
                ) : (
                    <span
                        onClick={link.onClick}
                        data-service-id={id}
                        className={styles.serviceLink}
                        style={{ cursor: 'pointer' }}
                    >
                        {link.text}
                    </span>
                )}
                <button
                    className={`${global.btn} ${global.btn__secondary}`}
                    onClick={btn.onClick}
                    data-service-id={id}
                    data-href={link?.href}
                >
                    {btn.text}
                </button>
            </div>
        </div>
    )
}

export default ServiceComponent
