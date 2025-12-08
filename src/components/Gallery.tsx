'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Gallery.module.css';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
    id: number;
    src: string;
    videoSrc?: string;
    alt: string;
    title: string;
    category: string;
}

const projects: MediaItem[] = [
    { id: 1, src: '/gallery-1.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4', alt: 'Abstract Fluid', title: 'Fluid Simulation', category: 'CGI Project' },
    { id: 2, src: '/gallery-2.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Architecture', title: 'Urban Heights', category: 'CGI Environment' },
    { id: 3, src: '/gallery-3.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-foggy-mountains-2664/1080p.mp4', alt: 'Landscape', title: 'Misty Peaks', category: 'Environment Design' },
    { id: 4, src: '/gallery-4.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-luxury-watch-4632/1080p.mp4', alt: 'Watch', title: 'Timeless Elegance', category: 'Product Visualization' },
    { id: 5, src: '/gallery-5.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-night-city-traffic-4532/1080p.mp4', alt: 'City', title: 'Night Velocity', category: 'CGI Motion' },
    { id: 6, src: '/gallery-6.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-ink-in-water-18/1080p.mp4', alt: 'Ink', title: 'Ink Dynamics', category: 'Abstract CGI' },
    { id: 7, src: '/gallery-1.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4', alt: 'Neon', title: 'Neon Pulse', category: 'CGI Art' },
    { id: 8, src: '/gallery-2.jpg', videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Future', title: 'Future Structure', category: 'Architectural Viz' },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    };

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
        }
    };

    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % projects.length);
        }
    };

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                {/* Responsive Grid Layout */}
                <div className={styles.projectsGrid}>
                    {projects.map((item, index) => (
                        <Card
                            key={item.id}
                            item={item}
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                            index={index}
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button className={styles.closeButton} onClick={closeLightbox}>
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className={`${styles.navButton} ${styles.prevButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                        >
                            <ChevronLeft size={40} />
                        </button>

                        <button
                            className={`${styles.navButton} ${styles.nextButton}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.lightboxImageWrapper}>
                                <Image
                                    src={projects[selectedIndex].src}
                                    alt={projects[selectedIndex].alt}
                                    fill
                                    className={styles.lightboxMedia}
                                    sizes="90vw"
                                    priority
                                />
                            </div>
                            <div className={styles.lightboxInfo}>
                                <h2 className={styles.lightboxTitle}>{projects[selectedIndex].title}</h2>
                                <p className={styles.lightboxCategory}>{projects[selectedIndex].category}</p>
                            </div>
                        </motion.div>

                        {/* Counter */}
                        <div className={styles.counter}>
                            {selectedIndex + 1} / {projects.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function Card({ item, hoveredId, setHoveredId, index, onClick }: {
    item: MediaItem,
    hoveredId: number | null,
    setHoveredId: (id: number | null) => void,
    index: number,
    onClick: () => void
}) {
    return (
        <motion.div
            className={styles.card}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.media}
                    />
                )}

                <div className={styles.overlayGradient} />

                <div className={styles.topIcon}>
                    <ArrowUpRight size={20} />
                </div>

                <div className={styles.cardContent}>
                    <h3 className={styles.projectTitle}>{item.title}</h3>
                </div>
            </div>
        </motion.div>
    );
}
