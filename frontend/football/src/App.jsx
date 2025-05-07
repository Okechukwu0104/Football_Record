import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import AppLayout from './components/layout';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </AppLayout>
  );
}

export default App;