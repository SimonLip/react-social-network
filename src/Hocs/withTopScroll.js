import React, { useState, useEffect } from "react";
import classes from "./withTopScroll.module.css"; 

const withTopScroll = (Component) => {
    const ScrollToTopButtonWrapper = (props) => {
        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 1000) {
                    setShowButton(true); 
                } else {
                    setShowButton(false); 
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        return (
            <div>
                <Component {...props} />
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className={classes.scrollToTopButton} 
                    >
                        To <br/> start
                    </button>
                )}
            </div>
        );
    };

    return ScrollToTopButtonWrapper;
};

export default withTopScroll;
