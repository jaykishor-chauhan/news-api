import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import SearchNews from './components/SearchNews';
import NewsCard from './components/NewsCard';
import TodayNews from './components/TodayNews';

function App() {

  const apiKey = 'cf9155b13b86413b9b5fb98cb3811cc5';
  const [defaultArticle, setdefaultArticles] = useState(null);

  useEffect(() => {
    const defultfetchApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
      const response = await fetch(url);
      const result = await response.json();

      setdefaultArticles(result.articles);

    };

    defultfetchApi();

  }, [])

  const fetchApi = async (catogery, val) => {
    const url = `https://newsapi.org/v2/${catogery}?${val}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const result = await response.json();
    return result.articles;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <NewsCard articles={defaultArticle} heading={'ApnaNews- Top headlines from TechCrunch'} />
            </>
          } />
          <Route path="/top-business-headlines" element={
            <>
              <Navbar />
              <SearchNews api={fetchApi}/>
            </>
          } />
          <Route path="/top-daily-headlines" element={
            <>
              <Navbar />
              <TodayNews api={fetchApi}/>
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
