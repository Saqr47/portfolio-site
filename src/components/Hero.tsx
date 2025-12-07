'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Globe, Sparkles } from 'lucide-react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundWrapper}>
                {/* Grid is handled in CSS */}
            </div>

            <div className={styles.editorialContainer}>
                {/* Top Technical Bar */}
                <motion.div
                    className={styles.topBar}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.techBadge}>
                        <Globe size={14} />
                        <span>BASED IN EGYPT</span>
                    </div>
                    <div className={styles.techBadge}>
                        <Sparkles size={14} />
                        <span>AVAILABLE FOR FREELANCE</span>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className={styles.mainGrid}>
                    {/* Left Name */}
                    <motion.div
                        className={styles.nameLeft}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className={styles.hugeText}>AHMED</h1>
                    </motion.div>

                    {/* Center Portrait */}
                    <motion.div
                        className={styles.centerVisual}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className={styles.portraitFrame}>
                            <Image
                                src="/portrait.jpg"
                                alt="Ahmed Sakr"
                                width={400}
                                height={400}
                                className={styles.portrait}
                                priority
                            />
                            <div className={styles.frameGlow} />

                            {/* Floating Badges around portrait */}
                            <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                                <span>CGI ARTIST</span>
                            </div>
                            <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}>
                                <span>DOOH SPECIALIST</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Name */}
                    <motion.div
                        className={styles.nameRight}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className={styles.hugeText}>SAKR</h1>
                    </motion.div>
                </div>

                {/* Bottom Description & Scroll */}
                <div className={styles.bottomBar}>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Crafting immersive CGI experiences <br />
                        and dynamic DOOH campaigns.
                    </motion.p>

                    <motion.div
                        className={styles.scrollCircle}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className={styles.scrollText}>
                            <svg viewBox="0 0 100 100" width="100" height="100">
                                <path
                                    id="curve"
                                    d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                    fill="transparent"
                                />
                                <text>
                                    <textPath href="#curve" fill="white" fontSize="11" letterSpacing="0.1em">
                                        SCROLL DOWN • DISCOVER MORE •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                        <ArrowDown className={styles.scrollArrow} size={20} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
