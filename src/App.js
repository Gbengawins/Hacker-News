import React from 'react';
import SearchForm from './components/SearchForm';
import Stories from './pages/Stories';
import Buttons from './components/Buttons';


function App() {
  return (
    <div className="App">
      <SearchForm />
      <Buttons />
      <Stories />
    </div>
  );
}

export default App;
