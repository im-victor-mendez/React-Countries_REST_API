import './consts/colors.scss'
import './consts/fonts.scss'
import './styles/Mobile.scss'
import './App.css';
import Header from './components/layouts/Header';
import { Routes, Route } from "react-router-dom";
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {
          routes.map(
            route => <Route
            path={`/${route.path}`}
            element={route.element} />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
