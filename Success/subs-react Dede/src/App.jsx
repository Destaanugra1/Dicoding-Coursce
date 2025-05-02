import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import NoteDetailPage from './page/NoteDetail';
import AddNotePage from './page/AddNotePage';
import NotFound from './page/NotFound';

function App() {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes/:id' element={<NoteDetailPage />} />
        <Route path='/add' element={<AddNotePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;
