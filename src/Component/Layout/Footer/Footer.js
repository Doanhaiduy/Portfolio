import React from 'react';
import End from '../../End/End';

function Footer(props) {
    return (
        <div className='bg-white dark:bg-black'>
            <End />
            <div className='text:black dark:text-white bg-[#f9f9f9] dark:bg-black h-[40px] flex gap-1 justify-center'>
                <p>Copyright © 2025 All Rights Reserved, </p>
                <p>
                    built and designed by{' '}
                    <a
                        href='https://www.facebook.com/DoanHaiDuy.Profile/'
                        className='text-blue-500 underline'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Doan Hai Duy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export default Footer;
