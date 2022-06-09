import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Populares from './pages/Populares';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/populares' element={ <Populares/> }/>
                <Route path='/filme/:id' element={ <Filme/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;