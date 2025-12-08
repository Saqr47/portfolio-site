'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
    id: number;
    images: string[];
    videoSrc?: string;
    alt: string;
    title: string;
    category: string;
}

const projects: MediaItem[] = [
    {
        id: 1,
        images: ['/mannequin-1.png', '/mannequin-2.png'],
        alt: 'Mannequin Render',
        title: 'Mannequin',
        category: '3D Character Art'
    },
    { id: 2, images: ['/gallery-2.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Architecture', title: 'Urban Heights', category: 'CGI Environment' },
    { id: 3, images: ['/gallery-3.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-foggy-mountains-2664/1080p.mp4', alt: 'Landscape', title: 'Misty Peaks', category: 'Environment Design' },
    { id: 4, images: ['/gallery-4.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-luxury-watch-4632/1080p.mp4', alt: 'Watch', title: 'Timeless Elegance', category: 'Product Visualization' },
    { id: 5, images: ['/gallery-5.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-night-city-traffic-4532/1080p.mp4', alt: 'City', title: 'Night Velocity', category: 'CGI Motion' },
    { id: 6, images: ['/gallery-6.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-ink-in-water-18/1080p.mp4', alt: 'Ink', title: 'Ink Dynamics', category: 'Abstract CGI' },
    { id: 7, images: ['/gallery-1.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-abstract-colorful-fluid-5392/1080p.mp4', alt: 'Neon', title: 'Neon Pulse', category: 'CGI Art' },
    { id: 8, images: ['/gallery-2.jpg'], videoSrc: 'https://cdn.coverr.co/videos/coverr-modern-architecture-building-5243/1080p.mp4', alt: 'Future', title: 'Future Structure', category: 'Architectural Viz' },
];

export default function Gallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            switch (e.key) {
                case 'ArrowLeft':
                    goToPrevious();
                    break;
                case 'ArrowRight':
                    goToNext();
                    break;
                case 'Escape':
                    closeLightbox();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, currentImageIndex]); // Dependencies ensure fresh state

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            const images = projects[selectedIndex].images;
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const goToNext = () => {
        if (selectedIndex !== null) {
            const images = projects[selectedIndex].images;
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
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
                        <button
                            className={styles.closeButton}
                            onClick={closeLightbox}
                            aria-label="Close lightbox"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons - Only show if multiple images */}
                        {projects[selectedIndex].images.length > 1 && (
                            <>
                                <button
                                    className={`${styles.navButton} ${styles.prevButton}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToPrevious();
                                    }}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={40} />
                                </button>

                                <button
                                    className={`${styles.navButton} ${styles.nextButton}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToNext();
                                    }}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={40} />
                                </button>
                            </>
                        )}

                        {/* Image Container */}
                        <motion.div
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            key={currentImageIndex}
                        >
                            <div className={styles.lightboxImageWrapper}>
                                <Image
                                    src={projects[selectedIndex].images[currentImageIndex]}
                                    alt={`${projects[selectedIndex].alt} - View ${currentImageIndex + 1}`}
                                    fill
                                    className={styles.lightboxMedia}
                                    sizes="95vw"
                                    priority
                                />
                            </div>
                            <div className={styles.lightboxInfo}>
                                <h2 className={styles.lightboxTitle}>{projects[selectedIndex].title}</h2>
                                <p className={styles.lightboxCategory}>{projects[selectedIndex].category}</p>

                                {/* Counter - Moved inside info to prevent overlap */}
                                {projects[selectedIndex].images.length > 1 && (
                                    <div className={styles.counter}>
                                        {currentImageIndex + 1} / {projects[selectedIndex].images.length}
                                    </div>
                                )}
                            </div>
                        </motion.div>
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
                    <>
                        {/* Primary Image */}
                        <Image
                            src={item.images[0]}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className={styles.media}
                        />

                        {/* Secondary Image (Reveal on Hover) */}
                        {item.images[1] && (
                            <Image
                                src={item.images[1]}
                                alt={`${item.alt} - Alternate View`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className={`${styles.media} ${styles.secondaryMedia}`}
                                style={{
                                    opacity: hoveredId === item.id ? 1 : 0,
                                    zIndex: 2,
                                    transition: 'opacity 0.5s ease-in-out'
                                }}
                            />
                        )}
                    </>
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
