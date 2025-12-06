'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.css';
import { ArrowUpRight } from 'lucide-react';

interface MediaItem {
    id: number;
    src: string;
    videoSrc?: string;
    alt: string;
    title: string;
    category: string;
}

const row1: MediaItem[] = [
    { id: 1, src: '/gallery-1.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4', alt: 'Abstract Fluid', title: 'Fluid Simulation', category: 'CGI Project' },
    { id: 2, src: '/gallery-2.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Architecture', title: 'Urban Heights', category: 'CGI Environment' },
    { id: 3, src: '/gallery-3.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-foggy-mountains-2664/1080p.mp4', alt: 'Landscape', title: 'Misty Peaks', category: 'Environment Design' },
    { id: 4, src: '/gallery-4.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-luxury-watch-4632/1080p.mp4', alt: 'Watch', title: 'Timeless Elegance', category: 'Product Visualization' },
];

const row2: MediaItem[] = [
    { id: 5, src: '/gallery-5.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-night-city-traffic-4532/1080p.mp4', alt: 'City', title: 'Night Velocity', category: 'CGI Motion' },
    { id: 6, src: '/gallery-6.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-ink-in-water-18/1080p.mp4', alt: 'Ink', title: 'Ink Dynamics', category: 'Abstract CGI' },
    { id: 7, src: '/gallery-1.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4', alt: 'Neon', title: 'Neon Pulse', category: 'CGI Art' },
    { id: 8, src: '/gallery-2.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Future', title: 'Future Structure', category: 'Architectural Viz' },
];

// Duplicate items for infinite marquee effect (3 sets to ensure smooth loop)
const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                {/* Header removed as requested */}

                {/* Row 1: Right to Left */}
                <div className={styles.marqueeWrapper}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{ x: [0, "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        {marqueeRow1.map((item, index) => (
                            <Card key={`row1-${item.id}-${index}`} item={item} hoveredId={hoveredId} setHoveredId={setHoveredId} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Left to Right (Reverse) */}
                <div className={styles.marqueeWrapper}>
                    <motion.div
                        className={styles.marqueeTrack}
                        animate={{ x: ["-50%", 0] }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    >
                        {marqueeRow2.map((item, index) => (
                            <Card key={`row2-${item.id}-${index}`} item={item} hoveredId={hoveredId} setHoveredId={setHoveredId} />
                        ))}
                    </motion.div>
                </div>

                <div className={styles.footer}>
                    <button className={styles.seeAllButton}>See all Projects</button>
                </div>
            </div>
        </section>
    );
}

function Card({ item, hoveredId, setHoveredId }: { item: MediaItem, hoveredId: number | null, setHoveredId: (id: number | null) => void }) {
    return (
        <div
            className={styles.card}
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
                        sizes="(max-width: 768px) 80vw, 400px"
                        className={styles.media}
                    />
                )}

                <div className={styles.overlayGradient} />

                <div className={styles.topIcon}>
                    <ArrowUpRight size={20} color="#fff" />
                </div>

                <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                </div>
            </div>
        </div>
    );
}
