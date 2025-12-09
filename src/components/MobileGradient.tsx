'use client';
import { useEffect, useState } from 'react';
import './MobileGradient.css';

export default function MobileGradient() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isMobile) return null;

    return <div className="mobile-gradient-bg" />;
}
