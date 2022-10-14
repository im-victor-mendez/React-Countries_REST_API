import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/layouts/CountryList';
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
      <CountryList view={view} />
    </div>
  );
}

export default App;
