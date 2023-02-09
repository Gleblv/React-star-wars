import { Route, Routes } from 'react-router-dom';

import Header from '../../components/Header/Header';
import HomePage from '../HomePage/HomePage';
import PeoplePage from '../PeoplePage/PeoplePage';

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/people' element={<PeoplePage/>} />
      </Routes>
    </div>
  )
}

export default App;