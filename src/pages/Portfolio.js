import React, { useContext } from 'react';
import Header from '../Component/Layout/Header/Header';
import BackgroundGradients from '../Component/BackgroundGradients';
import Overview from '../Component/Overview/Overview';
import Skills from '../Component/Skills';
import Projects from '../Component/Projects/Projects';
import About from '../Component/About/About';
import Contact from '../Component/Contact';
import HeaderMobile from '../Component/Layout/HeaderMobile/HeaderMobile';
import Footer from '../Component/Layout/Footer/Footer';
import PreLoader from '../Component/PreLoader';
import { ProfileContext } from '../context/ProfileContext';
import { Link } from 'react-router-dom';
import { GiDinosaurRex } from 'react-icons/gi';
import { TiWarning } from 'react-icons/ti';

export default function Portfolio() {
    const { loading } = useContext(ProfileContext);

    if (loading) return <PreLoader />;
    return (
        <div className='transition-colors text-center '>
            <Header />
            <BackgroundGradients />
            <div>
                <Overview />
                <Skills />
                <Projects />
                <About />
                <Contact />
            </div>
            <HeaderMobile />
            <Footer />
            <div className='fixed right-5 bottom-5 flex-col items-center text-[12px] hidden md:flex max-w-[120px] '>
                <p className=' text-red-500 font-bold mb-2 px-4 py-1 rounded-full'>Warning: Unleash the Dinosaur?!</p>
                <Link
                    to='/Dinosaur?'
                    className='bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-2'
                >
                    <TiWarning size={18} />
                    <GiDinosaurRex size={18} />
                </Link>
            </div>
            <div className='fixed top-[60px] right-[20px] flex-col items-center text-[12px] flex md:hidden group'>
                <Link
                    to='/Dinosaur?'
                    className='bg-red-500 text-white px-2 py-2 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center justify-center'
                >
                    <TiWarning />
                </Link>
                <p className='text-red-500 font-bold px-4 py-1 rounded-full absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Warning: Unleash the Dinosaur?!
                </p>
            </div>
        </div>
    );
}
