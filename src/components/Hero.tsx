'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                {/* Global background is now in page.tsx */}
            </div>

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
                        alt="Ahmed Sakr"
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
                    Ahmed Sakr
                </motion.h1>

                <motion.h2
                    className={styles.roleSubtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                    CGI Artist · DOOH Specialist
                </motion.h2>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: [0.19, 1, 0.22, 1] }}
                >
                    Crafting immersive CGI experiences and dynamic DOOH campaigns
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
