import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import CleatPage from './views/soccerView/cleatPage/CleatPage';
import ErrorPage from './views/errorPage/ErrorPage';
import CleatTable from './views/soccerView/cleatArchive/CleatArchive';
import Recommender from './views/soccerView/chooser/Recommender';
import { SoccerView } from './views/soccerView/SoccerView';
import { GamesView } from './views/gamesView/GamesView';
import { Hangman } from './views/gamesView/hangman/Hangman';
import { TerminalView } from './views/terminalView/TerminalView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/soccer' element={<SoccerView />} />
          <Route path='/soccer/archive' element={<CleatTable />} />
          <Route path='/soccer/archive/:id' element={<CleatPage />} />
          <Route path='/soccer/recommender' element={<Recommender />} />
          <Route path='/terminal' element={<TerminalView />} />
          <Route path='/games' element={<GamesView />} />
          <Route path='/games/hangman' element={<Hangman />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
