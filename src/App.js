import './App.css';
import { Section } from './components/sectionsContainer/section';
import { Article } from './components/article/article';
import { Header } from "./components/header/header"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ArticleContainer } from './components/article/articleContainer';
import { Entity } from './components/entity/entityContainer';
// import { Section } from './components/sectionsContainer/section';

function App() {
  return (



    <BrowserRouter>

      <Header />

      <Routes>

        {/* <Route path='/' element={<Main />} /> */}
        <Route path='/articles/:entity/:section/:type' element={<ArticleContainer/>}/>
        <Route path='/articles/:entity/:section' element={<Section/>}/>
        <Route path='/articles/:entity' element={<Entity/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
