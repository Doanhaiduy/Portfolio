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
        </div>
    );
}
