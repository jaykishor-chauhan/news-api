import React, { useState } from 'react';
import NewsCard from './NewsCard';

function TodayNews({ loading, api }) {

    const [articles, setArticles] = useState(null);
    
    const callApi = async()=>{
        setArticles(await api('top-headlines',`country=us&category=business`));  
    }
    
    if(!loading){
        callApi();
    }
    
    return (
        <div className="container mt-5">
            <div className="mt-3" style={{ height: '50px' }}>
                <h5>{loading ? 'Loading articles...' : ''}</h5>
            </div>

            <NewsCard articles={articles} heading={`Top business headlines in the US right now.`} />
        </div>

    );
}

export default TodayNews;
