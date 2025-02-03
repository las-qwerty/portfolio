import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentText('');
                setCurrentIndex(0);
            }, delay * 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span className="text-5xl font-bold mt-5">{currentText}</span>;
};

export default Typewriter;