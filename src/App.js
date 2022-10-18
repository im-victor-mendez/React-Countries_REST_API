import './consts/colors.scss'
import './consts/fonts.scss'
import './styles/Mobile.scss'
import './App.css';
import Header from './components/layouts/Header';
import { Routes, Route } from "react-router-dom";
import routes from './routes/routes';
import { v4 as key } from 'uuid';

function App() {
  return (
    <div id='App' className="App">
      <Header />
      <Routes>
        {
          routes.map(
            route => <Route
            key={key()}
            path={`/${route.path}`}
            element={route.element} />
          )
        }
      </Routes>
    </div>
  );
}

export default App;
