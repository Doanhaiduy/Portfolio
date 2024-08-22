import React from 'react';
import './ButtonAnimate.css';

export default function ButtonAnimate({ href, text, classes, download, onClick }) {
    return (
        <div className='button' onClick={onClick}>
            {download ? (
                <a
                    href={href}
                    className={`click-btn rounded-md ${classes}`}
                    download={download}
                    rel='noreferrer'
                    target='_blank'
                >
                    <span>{text}</span>
                </a>
            ) : (
                <a href={href} className={`click-btn rounded-md ${classes}`} rel='noreferrer' target='_blank'>
                    <span>{text}</span>
                </a>
            )}
        </div>
    );
}
