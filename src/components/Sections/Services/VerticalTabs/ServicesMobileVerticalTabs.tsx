'use client'

import { useState, FC } from 'react'
import styles from './ServicesMobileVerticalTabs.module.css'

type TabProps = {
    name: string
    index: number
    activeTabId: number
    onClick: (index: number) => void
}

const Tab: FC<TabProps> = ({ name, index, activeTabId, onClick }) => {
    const clicked = () => {
        onClick(index)
    }

    return (
        <li
            onClick={clicked}
            className={`carrctl-tab-title ${styles.tabsList_item} ${
                activeTabId === index ? styles.activeTab : ''
            }`}
        >
            <span>{name}</span>
        </li>
    )
}

type DataItem = {
    name: string
    content: JSX.Element
    styles?: string
}

type VerticalTabsProps = {
    data: DataItem[]
}

const VerticalTabs: FC<VerticalTabsProps> = ({ data }) => {
    const [activeTabId, setActiveTabId] = useState<number>(0)

    const tabClick = (id: number) => {
        setActiveTabId(id)
    }

    return (
        <div className={styles.tabs}>
            <div className={styles.tabsListWrapper}>
                <ul className={styles.tabsList}>
                    {data &&
                        data.map((item, index: number) => (
                            <Tab
                                name={item.name}
                                key={`${item.name.toLowerCase()}-${index}`}
                                index={index}
                                activeTabId={activeTabId}
                                onClick={tabClick}
                            />
                        ))}
                </ul>
            </div>
            <div className={styles.tabsContent}>
                {data &&
                    data.map((item, index: number) => (
                        <div
                            key={index}
                            className={`${item.styles ? item.styles : ''} ${
                                activeTabId === index
                                    ? styles.activeTabContent
                                    : ''
                            }`}
                        >
                            {item.content}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default VerticalTabs
