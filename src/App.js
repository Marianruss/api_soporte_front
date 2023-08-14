import './App.css';
import { Main } from './components/index/main';
import { Header } from "./components/header/header"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (



    <BrowserRouter>

      <Header />

      <Routes>

        <Route path='/' element={<Main />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
