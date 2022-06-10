//LIBS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//COMPONENTS
import Header from './components/Header';
//PAGES
import Home from './pages/Home';
import Filme from './pages/Filme';
import Populares from './pages/Populares';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/populares' element={ <Populares/> }/>
                <Route path='/filme/:id' element={ <Filme/> }/>
                <Route path='/favoritos' element={ <Favoritos/> }/>
                <Route path='*' element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;