import React from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/Footer';
import Books from './pages/books/Books';
import Library from './pages/library/Library';
import Login from './pages/login/Login';
import Slider from './components/slider/Slider';
import Home from './pages/home/Home';
import Category from './pages/books/category';
import 'boxicons';
import './style/style.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/layout/layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route path="/"element={<>home</>}></Route>
            <Route path='books' element={<Category/>}></Route>
            <Route path='library' element={<Library/>}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
