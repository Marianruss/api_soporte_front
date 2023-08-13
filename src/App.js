import logo from './logo.svg';
import './App.css';
import { Index } from './components/index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Index />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
