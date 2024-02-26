import React, { useState } from 'react';
import styles from './styles.module.css';

interface AccordionProps {
    title: string;
    content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div className={styles.accordionBtn}>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={styles.accordionContent}>{content}</div>}
        </div>
    );
};

export default Accordion;
