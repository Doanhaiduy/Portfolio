import { useContext } from 'react';
import About from './Component/About/About';
import BackgroundGradients from './Component/BackgroundGradients';
import Footer from './Component/Layout/Footer/Footer';
import Header from './Component/Layout/Header/Header';
import HeaderMobile from './Component/Layout/HeaderMobile/HeaderMobile';
import Overview from './Component/Overview/Overview';
import Projects from './Component/Projects/Projects';
import Skills from './Component/Skills';
import { ProfileContext } from './context/ProfileContext';
import PreLoader from './Component/PreLoader';

function App() {
    const { loading } = useContext(ProfileContext);

    if (loading) return <PreLoader />;
    return (
        <div className='transition-colors text-center'>
            <Header />
            <BackgroundGradients />
            <div>
                <Overview />
                <Skills />
                <Projects />
                <About />
            </div>
            <HeaderMobile />
            <Footer />
        </div>
    );
}
export default App;
