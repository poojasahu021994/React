import React, { useState, useEffect } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        const heightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") { // Checking if window is available
            window.addEventListener("scroll", listenToScroll);

            return () => window.removeEventListener("scroll", listenToScroll);
        }
    }, []);

    return (
        <section className="go-to-section">
            {isVisible && (
                <div className="top-btn" onClick={goToBtn}>
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            )}
        </section>
    );
};

export default GoToTop;