//import { useEffect } from 'react';
import './App.css';
import Header from './components/layouts/Header';
//import { apiAllCountries } from './utils/apiFunctions';

function App() {
  /*
  useEffect(() => {
    apiAllCountries()
    .then(
      data => {
        console.log(data)
      }
    )
  }, [])
  */
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
