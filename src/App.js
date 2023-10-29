import './App.css';
import React,{Component,useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from'./components/Main.jsx';
import Footer from'./components/Footer.jsx';
import { RecoilRoot } from 'recoil';

function App() {


  return (
    <div className="App">
      <RecoilRoot>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </RecoilRoot>
    </div>
  );
}

export default App;
