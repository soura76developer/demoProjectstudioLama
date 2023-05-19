import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import globalCss from './css/global.css';

import Introduction from "./components/introduction_page.js" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPage from './components/second_page';
import ThirdPage from './components/third_page';


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route index element={<Introduction />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="/ThirdPage" elements={<ThirdPage/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
