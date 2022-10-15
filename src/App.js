import './consts/colors.scss'
import './consts/fonts.scss'
import './App.css';
import Header from './components/layouts/Header';
import { Routes, Route } from "react-router-dom";
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Header />
      {/*
      */}
      <Routes>
        {
          routes.map(
            route => <Route
            path={`/${route.path}`}
            element={route.element} />
          )
        }
      </Routes>
      {/*
      <Filters />
      <CountryList view={
        view
        .filter((country) => search(filterStore.search, country))
        .filter((country) => filter(filterStore.filter, country))
      } />
      */}
    </div>
  );
}

export default App;
