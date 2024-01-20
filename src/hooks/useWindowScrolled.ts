import React, { useEffect, useState } from 'react';

export const useWindowScrolled = () => {
    const isWindowScrolled = () => window.scrollY > 0;
    const [windowScrolled, setWindowScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setWindowScrolled(isWindowScrolled());
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return windowScrolled;
};
