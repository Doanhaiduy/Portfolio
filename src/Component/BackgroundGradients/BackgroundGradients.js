import React from "react";
import "./BackgroundGradients.css";

function BackgroundGradients(props) {
    return (
        <div className="absolute inset-0 z-[-1] overflow-hidden h-[500vh] bg-white dark:bg-black">
            <div className="gradient"></div>
            <div className="gradient2"></div>
            <div className="gradient3"></div>
            <div className="gradient4"></div>
        </div>
    );
}

export default BackgroundGradients;
