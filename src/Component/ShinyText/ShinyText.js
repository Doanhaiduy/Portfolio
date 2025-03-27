const ShinyText = ({ text, disabled = false, speed = 5, className = '', isDarkBackground = true }) => {
    const animationDuration = `${speed}s`;

    const textColor = isDarkBackground ? '#b5b5b5a4' : '#333333a4';
    const gradientColors = isDarkBackground
        ? 'rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%'
        : 'rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 60%';

    return (
        <div
            className={`bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                color: textColor,
                backgroundImage: `linear-gradient(120deg, ${gradientColors})`,
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;
