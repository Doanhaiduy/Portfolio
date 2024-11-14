import React from 'react';
import GIF from '../../public/assets/media/dribbble_1.gif';

export default function NotFound() {
    return (
        <section className='flex items-center justify-center min-h-screen bg-white  font-serif py-10'>
            <div className='w-full h-full'>
                <div className='flex flex-col items-center w-full'>
                    <div className='text-center w-3/4 sm:w-1/2 '>
                        <div
                            className='bg-cover bg-center h-[250px] sm:h-[400px] lg:h-[500px] mb-8 flex justify-center py-12'
                            style={{
                                backgroundImage: `url(${GIF})`,
                            }}
                        >
                            <h1 className='lg:text-8xl sm:text-6xl text-4xl font-bold lg:mt-12 sm:mt-2 mt-[-20px]'>
                                404
                            </h1>
                        </div>
                        <div className='mt-[-50px] sm:mt-[-100px] text-center'>
                            <h3 className='lg:text-3xl text-2xl font-semibold mb-4'>
                                Oops! This page went extinct like the dinosaurs!
                            </h3>
                            <p className='text-lg mb-6'>But don’t worry, we’ll guide you back to safer ground!</p>
                            <a
                                href='/'
                                className='px-6 py-2 text-lg bg-orange-600 text-white rounded hover:bg-orange-700'
                            >
                                Let’s get you home!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
