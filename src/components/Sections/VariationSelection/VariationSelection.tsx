import Link from 'next/link'
import { useState } from 'react'
import { Button, Radio } from 'antd'

import styles from './VariationSelection.module.css'

import { VariationsType } from './constants'

type Props = {
    variations: VariationsType[]
}

export default function VariationSelection(props: Props) {
    const { variations } = props
    const [selectedVariation, setSelectedVariation] = useState(
        variations?.[0]?.value,
    )

    return (
        <div className={`box-xs-spacing variation-selection-bg relative`}>
            <div
                className={`${styles['variation-selection-section']} relative`}
            >
                <div className={`${styles['variation-selection-box']}`}>
                    <h2 className='carrctl-subtitle text-lg uppercase'>
                        Lorem ipsum dolor sit amet consectetu?
                    </h2>
                    <Radio.Group
                        value={selectedVariation}
                        onChange={e => setSelectedVariation(e.target?.value)}
                        className='def-my-16 md-my-8'
                    >
                        {variations.map((item: VariationsType, index) => (
                            <Radio
                                value={item.value}
                                key={index}
                                className='w-full def-my-8 md-my-4 uppercase'
                            >
                                {item.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                    <Button
                        type='text'
                        className='carrctl-btn carrctl-btn-secondary'
                    >
                        <Link href={process.env.NEXT_PUBLIC_HOME_URL}>
                            Send
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export { VariationSelection }
