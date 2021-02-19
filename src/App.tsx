import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import FeatureContent from './components/FeatureContent';
import PageTitle from './components/PageTitle';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import SlideBanner from './components/SlideBanner';
import { store } from './store';


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <PageTitle />
        <SlideBanner />
        <FeatureContent />
        <Footer />
      </Provider>

    </div>
  );
}

export default App;
