import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News';
import SearchNews from './components/SearchNews';
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchApi = async ()=>{
      try{
        const url = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=cf9155b13b86413b9b5fb98cb3811cc5`;
        const response = await fetch(url);
        const result = await response.json();
        setArticles(result.articles);
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(error);
      }
    };

    fetchApi();
  }, [])
  
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
            <News articles={articles} />
            </>
          }/>
          <Route path="/search" element={
            <>
            <Navbar />
            <SearchNews/>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
