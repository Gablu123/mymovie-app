import React from 'react';
import Header from './components/Header/Header';
import "./App.css"
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search'
import Series from './pages/Series/Series';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <div className='app'>
      <Container>
      <Routes>
        <Route path='/' element={<Trending/>} exact/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      </Container>
  
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  )
};

export default App;
