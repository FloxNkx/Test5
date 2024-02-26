"use client";

import styles from './Whyus.module.css';
import Link from 'next/link';

export default function Whyus  ()  {
    return (
        <div className='box'>
            
        <div className={styles["why-us"]}>
                WHY US?
        </div>
        
        <div className={styles["features-container"]}>
       
            <div className={styles["feature-box"]}>
                <div className={styles["icon-container"]}>
                <img src="https://carrectly.s3.amazonaws.com/public/mechanical/Mechanical-locker.webp" alt="Trust & Safety Icon" />
            </div>
            
            <h2>One stop shop</h2>
            <p>Get everything done in one place, everything you need, we help to solve it all PLUS on demand, free pick up and return, on your schedule, anywhere in chicago,(accomodating and reliable experts)</p>
        </div>

        <div className={styles["feature-box"]}>
            <div className={styles["icon-container"]}>
                <img src="https://carrectly.s3.amazonaws.com/public/mechanical/Mechanical-board.webp" alt="Convenience Icon" />
            </div>
            <h2>Warranty protected</h2>
            <p>we stand and double check all service qualify, any issues you can actually get help</p>
        </div>

        <div className={styles["feature-box"]}>
            <div className={styles["icon-container"]}>
                <img src="https://carrectly.s3.amazonaws.com/public/mechanical/Mechanical-stars.webp" alt="Stay Updated, Pay After Icon" />
            </div>
            <h2>Top quality</h2>
            the team that takes pride of the work they do, certified, knwoeledanble, helpful but also extreme attentive to detail (craftsmanship, detail orientated)        
        </div>
    </div>
    <div className={styles["box-background"]}>
                <img src="https://carrectly.s3.amazonaws.com/public/main/Vector-why-us.webp" alt="background" />
    </div>
    <div>
    <div>
        <button className={styles["book"]}>
            <Link href={'/book'}>
                Book now
            </Link>
            </button>
    </div>
    </div>
    </div>
    
    )
}
export {Whyus};