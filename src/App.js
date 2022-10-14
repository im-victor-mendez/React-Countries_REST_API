import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/layouts/CountryList';
import Filters from './components/layouts/Filters';
import Header from './components/layouts/Header';
import { apiAllCountries } from './utils/apiFunctions';

function App() {
  const [view, setView] = useState([])
  
  useEffect(() => {
    apiAllCountries()
    .then(
      data => {
        setView(data)
      }
    )
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Filters />
      <CountryList view={view} />
    </div>
  );
}

export default App;
