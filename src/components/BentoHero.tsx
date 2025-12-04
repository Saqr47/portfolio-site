'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './BentoHero.module.css';

export default function BentoHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Small circular photo at top */}
                <motion.div
                    className={styles.photoWrapper}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <div className={styles.photoGlow} />
                    <Image
                        src="/portrait.jpg"
                        alt="Ahmed Sakr"
                        width={150}
                        height={150}
                        className={styles.photo}
                        priority
                    />
                </motion.div>

                {/* Title */}
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                >
                    Creative
                    <br />
                    Portfolio
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                >
                    A visual journey through design, innovation, and creativity
                </motion.p>
            </div>
        </section>
    );
}
