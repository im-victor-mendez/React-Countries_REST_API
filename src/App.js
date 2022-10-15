import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import CountryList from './components/layouts/CountryList';
import Filters from './components/layouts/Filters';
import Header from './components/layouts/Header';
import { setList } from './stateManagement/countrySlice';
import { apiAllCountries } from './utils/apiFunctions';
import { filter, search } from './utils/reusableFunctions/filter';

function App() {
  const view = useSelector(state => state.countryList)
  const filterStore = useSelector(state => state.filters)

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
      <CountryList view={
        view
        .filter((country) => search(filterStore.search, country))
        .filter((country) => filter(filterStore.filter, country))
      } />
    </div>
  );
}

export default App;
