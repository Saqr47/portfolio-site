'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './BentoGrid.module.css';

interface Project {
    id: number;
    title: string;
    image: string;
    span?: 'wide' | 'tall' | 'large';
}

const projects: Project[] = [
    { id: 1, title: 'Abstract Art', image: '/gallery-1.jpg', span: 'wide' },
    { id: 2, title: 'Architecture', image: '/gallery-2.jpg' },
    { id: 3, title: 'Landscape', image: '/gallery-3.jpg' },
    { id: 4, title: 'Product Design', image: '/gallery-4.jpg', span: 'tall' },
    { id: 5, title: 'Urban Photography', image: '/gallery-5.jpg', span: 'wide' },
    { id: 6, title: 'Fluid Art', image: '/gallery-6.jpg' },
];

export default function BentoGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`${styles.gridItem} ${project.span ? styles[project.span] : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.19, 1, 0.22, 1],
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.overlay}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
