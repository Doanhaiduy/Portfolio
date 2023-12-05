import About from "./Component/About/About";
import BackgroundGradients from "./Component/BackgroundGradients";
import Footer from "./Component/Layout/Footer/Footer";
import Header from "./Component/Layout/Header/Header";
import HeaderMobile from "./Component/Layout/HeaderMobile/HeaderMobile";
import Overview from "./Component/Overview/Overview";
import Projects from "./Component/Projects/Projects";
import Skills from "./Component/Skills";

function App() {
    return (
        <div className=" transition-colors text-center">
            <Header />
            <BackgroundGradients />
            <div>
                <Overview />
                <About />
                <Skills />
                <Projects />
            </div>
            <HeaderMobile />
            <Footer />
        </div>
    );
}
export default App;
