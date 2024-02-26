import { Col, Row } from 'antd'
import styles from '@/components/Sections/MobileMenuBar/MobileMenuBar.module.css'
import Icon, {
    FieldTimeOutlined,
    HomeOutlined,
    SearchOutlined,
    MailOutlined,
} from '@ant-design/icons'
import Link from 'next/link'

const PlusSvg = () => (
    <svg
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M1.22521 11.2974C0.831492 11.2974 0.518555 10.9743 0.518555 10.5806C0.518555 10.1869 0.831492 9.87395 1.22521 9.87395H9.796V1.30252C9.79664 0.908807 10.1198 0.585693 10.5135 0.585693C10.9072 0.585693 11.2201 0.908807 11.2201 1.30252V9.87395H19.7909C20.1846 9.87395 20.5077 10.1869 20.5077 10.5806C20.5077 10.9743 20.1846 11.2974 19.7909 11.2974H11.2201V19.8689C11.2201 20.2626 10.9072 20.5857 10.5135 20.5857C10.1198 20.5857 9.79664 20.2626 9.79664 19.8689V11.2974H1.22521Z'
            fill='white'
        />
    </svg>
)

export default function MobileMenuBar() {
    const MENU_BAR_ITEMS = [
        {
            title: 'Home',
            icon: <HomeOutlined />,
            url: process.env.NEXT_PUBLIC_HOME_URL,
        },
        {
            title: 'Discovery',
            icon: <SearchOutlined />,
            url: ''
        },
        {
            icon: <Icon component={PlusSvg} />,
            isCenterItem: true,
            url: ''
        },
        {
            title: 'Quote',
            icon: <FieldTimeOutlined />,
            url: process.env.NEXT_PUBLIC_QUOTE_URL,
        },
        {
            title: 'Сontact us',
            icon: <MailOutlined />,
            url: process.env.NEXT_PUBLIC_CONTACTS_URL,
        },
    ]

    return (
        <div className={`${styles['mobile-menu-bar']} hide md-show`}>
            <Row
                gutter={6}
                align={'middle'}
                justify={'space-between'}
                className='w-full'
            >
                {MENU_BAR_ITEMS.map((item, index) => (
                    <Col
                        xs={item.isCenterItem ? 5 : 'auto'}
                        className='flex justify-center'
                        key={index}
                    >
                        <Link
                            href={item.url || '#'}
                            className={`${styles['mobile-menu-bar-btn']} ${item.isCenterItem ? styles['mobile-menu-bar-btn-center-item'] : ''}`}
                        >
                            {item.title && (
                                <p
                                    className={`${styles['mobile-menu-bar-btn-text']}`}
                                >
                                    {item.title}
                                </p>
                            )}
                            <span
                                className={`${styles['mobile-menu-bar-btn-icon']}`}
                            >
                                {item.icon}
                            </span>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export { MobileMenuBar }
