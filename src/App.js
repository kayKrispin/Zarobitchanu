import React from 'react';
import ContentHolder from "./containers/ContentPlaceholder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import './App.css';


const App = () => {
  return (
    <div>
        <Header/>
        <ContentHolder/>
        <Footer/>
        <Modal/>
    </div>
  );
};

export default App;
