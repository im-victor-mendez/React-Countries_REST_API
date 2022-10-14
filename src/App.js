import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import CountryList from './components/layouts/CountryList';
import Filters from './components/layouts/Filters';
import Header from './components/layouts/Header';
import { setList } from './stateManagement/countrySlice';
import { apiAllCountries } from './utils/apiFunctions';
import { filter } from './utils/reusableFunctions/filter';

function App() {
  const view = useSelector(state => state.countryList)
  const filterState = useSelector(state => state.filters.filter)

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
        view.filter((country) => filter(filterState, country))
      } />
    </div>
  );
}

export default App;
