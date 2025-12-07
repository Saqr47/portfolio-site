'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <h3 className={styles.callToAction}>Like what you see?</h3>
                    <h2 className={styles.identity}>Contact me and let's work together</h2>

                    <div className={styles.contactInfo}>
                        <a href="mailto:ahmedaesakr@gmail.com" className={styles.link}>ahmedaesakr@gmail.com</a>
                        <span className={styles.separator}>•</span>
                        <a href="tel:+201062468184" className={styles.link}>+20 10 62468184</a>
                    </div>

                    <button className={styles.button}>
                        ABOUT ME
                    </button>

                    <div className={styles.socials}>
                        <a href="https://facebook.com/ahmedaesakr" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                        <a href="https://linkedin.com/in/ahmedaesakr" className={styles.socialIcon} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                        <a href="https://instagram.com/ahmedaesakr" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                    </div>

                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Ahmed Sakr. All rights reserved.
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
