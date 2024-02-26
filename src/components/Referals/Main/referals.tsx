import styles from './referals.module.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function TheMain() {
    return (
        <div className={styles['body']}>
            <div className={styles['block-forms']}>
                <div className={styles['block-forms-title']}>
                    Your contact details
                </div>
                <div className={styles['block-forms-input']}>
                    <Box
                        component='form'
                        sx={{
                            '& > :not(style)': {
                                m: 2,
                                width: '50ch',
                                backgroundColor: '#fff',
                            },
                        }}
                        noValidate
                        autoComplete='off'
                    >
                        <TextField
                            id='outlined-basic'
                            label='Name'
                            variant='outlined'
                        />
                        <TextField
                            id='outlined-basic'
                            label='Phone Number'
                            variant='outlined'
                        />
                        <TextField
                            id='outlined-basic'
                            label='Email'
                            variant='outlined'
                        />
                    </Box>
                </div>
                <div className={styles['book']}>Book Now</div>
            </div>
            <div className={styles['block-body']}>
                <div className={styles['body-title-1']}>
                    Lorem ipsum dolor sit GIVE $20, GET $20
                </div>
                <div className={styles['block-brands']}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/referals/Brands-1.webp`}
                        alt='brands'
                    ></img>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/referals/Brands-2.webp`}
                        alt='brands'
                    ></img>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/referals/Brands-3.webp`}
                        alt='brands'
                    ></img>
                </div>

                <div className={styles['background']}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_IMAGES_BUCKET}/referals/background-audi.webp`}
                        alt='Rectangle'
                    ></img>
                </div>
            </div>
        </div>
    )
}
export { TheMain }
