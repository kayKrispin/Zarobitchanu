import React from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./containers/ContentPlaceholder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
