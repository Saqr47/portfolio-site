'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                >
                    <div className={styles.imageGlow} />
                    <Image
                        src="/portrait.jpg"
                        alt="Portfolio"
                        width={400}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                >
                    Creative
                    <br />
                    <span className={styles.titleAccent}>Portfolio</span>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                    A visual journey through design, innovation, and creativity
                </motion.p>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <ChevronDown className={styles.scrollIcon} />
            </motion.div>
        </section>
    );
}
