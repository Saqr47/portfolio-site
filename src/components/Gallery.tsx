'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.css';

interface MediaItem {
    id: number;
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption: string;
}

const mediaItems: MediaItem[] = [
    { id: 1, type: 'image', src: '/gallery-1.jpg', alt: 'Abstract Art', caption: 'Abstract Composition' },
    { id: 2, type: 'image', src: '/gallery-2.jpg', alt: 'Architecture', caption: 'Modern Architecture' },
    { id: 3, type: 'image', src: '/gallery-3.jpg', alt: 'Landscape', caption: 'Mountain Vista' },
    { id: 4, type: 'image', src: '/gallery-4.jpg', alt: 'Product', caption: 'Luxury Product' },
    { id: 5, type: 'image', src: '/gallery-5.jpg', alt: 'Urban', caption: 'Urban Nights' },
    { id: 6, type: 'image', src: '/gallery-6.jpg', alt: 'Abstract', caption: 'Fluid Dynamics' },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className={styles.gallery}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <h2 className={styles.title}>Featured Work</h2>
                    <p className={styles.subtitle}>
                        A curated selection of creative projects and visual explorations
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.gridItem}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.19, 1, 0.22, 1],
                            }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={styles.mediaWrapper}>
                                {item.type === 'image' ? (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={600}
                                        height={400}
                                        className={styles.media}
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        className={styles.media}
                                        loop
                                        muted
                                        playsInline
                                    />
                                )}
                                <div
                                    className={`${styles.overlay} ${hoveredId === item.id ? styles.overlayVisible : ''
                                        }`}
                                >
                                    <p className={styles.caption}>{item.caption}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
