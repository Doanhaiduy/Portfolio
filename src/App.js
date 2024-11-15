import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter
            future={{
                v7_startTransition: true,
            }}
        >
            <Routes>
                <Route path='/' element={<Portfolio />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
