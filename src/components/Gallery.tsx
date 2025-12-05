'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.css';

interface MediaItem {
    id: number;
    src: string;
    videoSrc?: string; // Optional for now, but logic will use it
    alt: string;
    caption: string;
}

// Using placeholders for demonstration of the "Next Frame" logic
const mediaItems: MediaItem[] = [
    {
        id: 1,
        src: '/gallery-1.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4',
        alt: 'Project One',
        caption: 'Abstract Fluidity'
    },
    {
        id: 2,
        src: '/gallery-2.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4',
        alt: 'Project Two',
        caption: 'Modern Structure'
    },
    {
        id: 3,
        src: '/gallery-3.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-foggy-mountains-2664/1080p.mp4',
        alt: 'Project Three',
        caption: 'Nature Scapes'
    },
    {
        id: 4,
        src: '/gallery-4.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-luxury-watch-4632/1080p.mp4',
        alt: 'Project Four',
        caption: 'Product Design'
    },
    {
        id: 5,
        src: '/gallery-5.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-night-city-traffic-4532/1080p.mp4',
        alt: 'Project Five',
        caption: 'Urban Motion'
    },
    {
        id: 6,
        src: '/gallery-6.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-ink-in-water-18/1080p.mp4',
        alt: 'Project Six',
        caption: 'Ink Dynamics'
    },
    {
        id: 7,
        src: '/gallery-1.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4',
        alt: 'Project Seven',
        caption: 'Digital Art'
    },
    {
        id: 8,
        src: '/gallery-2.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4',
        alt: 'Project Eight',
        caption: 'Visual Effects'
    },
    {
        id: 9,
        src: '/gallery-3.jpg',
        videoSrc: 'https://cdn.coverr.co/videos/coverr-foggy-mountains-2664/1080p.mp4',
        alt: 'Project Nine',
        caption: 'Motion Graphics'
    },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <h2 className={styles.heading}>Featured Work</h2>
                    <p className={styles.subheading}>A curated selection of my best projects</p>
                </motion.div>
                <div className={styles.grid}>
                    {mediaItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.gridItem}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={styles.mediaWrapper}>
                                {hoveredId === item.id && item.videoSrc ? (
                                    <video
                                        src={item.videoSrc}
                                        className={styles.media}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.media}
                                        priority={item.id <= 3} // Lazy load others
                                    />
                                )}
                                <div className={styles.overlay}>
                                    <h3 className={styles.caption}>{item.caption}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
