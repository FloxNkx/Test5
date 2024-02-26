import { useState } from 'react'
import styles from './styles.module.css'

/* TabList Item */

interface TabProps {
    name: string
    index: number
    activeTabId: number
    onClick: (index: number) => void
}

const Tab: React.FC<TabProps> = ({ name, index, activeTabId, onClick }) => {
    /* Item Click Event Handler */
    const clicked = () => {
        onClick(index)
    }

    return (
        <li
            onClick={clicked}
            className={`${styles.tabsList_item} tabs-list_item ${activeTabId === index ? 'active-tab' : ''}`}
        >
            <span>{name}</span>
        </li>
    )
}

/* Tabs Block */
interface TabsProps {
    className?: string
    type?: string
    data: {
        name: string
        content: React.ReactNode
        styles?: string
    }[]
}
const Tabs: React.FC<TabsProps> = ({ className, type, data }) => {
    const [activeTabId, setActiveTabId] = useState(0)

    /* Tab Click Event Handler */
    const tabClick = (id: number) => {
        setActiveTabId(id)
    }

    return (
        <div
            className={`${styles.tabs} ${className} ${type ? type : 'horizontal'}`}
        >
            <div className={styles.tabsListWrapper}>
                <ul className={styles.tabsList}>
                    {data &&
                        data.map((item, index) => {
                            return (
                                <Tab
                                    name={item.name}
                                    key={`${item.name.toLowerCase()}-${index}`}
                                    index={index}
                                    activeTabId={activeTabId}
                                    onClick={tabClick}
                                />
                            )
                        })}
                </ul>
            </div>
            <div className={styles.tabsContent}>
                {data &&
                    data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`${item.styles} ${activeTabId === index ? styles.activeTabContent : ''}`}
                            >
                                {item.content}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Tabs
