import React from 'react';
import './App.css';
import Header from "./components/Header";
import ContentHolder from "./containers/ContentPlaceholder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
        <Header/>
        <ContentHolder/>
        <Footer/>
    </div>
  );
};

export default App;
