import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import CountryList from './components/layouts/CountryList';
import Filters from './components/layouts/Filters';
import Header from './components/layouts/Header';
import { setList } from './stateManagement/countrySlice';
import { apiAllCountries } from './utils/apiFunctions';

function App() {
  const view = useSelector(state => state.countryList)
  const dispatch = useDispatch()
  
  useEffect(() => {
    apiAllCountries()
    .then(
      data => {
        dispatch(
          setList(data)
        )
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
