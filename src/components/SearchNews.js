import React, {useState, useEffect} from 'react';
import NewsCard from './NewsCard';

function SearchNews({loading, api}) {
    
    const [articles, setArticles] = useState(null);
    const [todayDate, setTodayDate] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');


    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTodayDate(formattedDate);
    }, []);

    const findNews = async (e)=>{
        e.preventDefault();
        setCompanyName(document.getElementById('company').value);
        setFromDate(document.getElementById('from').value);
        setToDate(document.getElementById('to').value);
        setArticles(await api('top-headlines',`q=${companyName}&from=${fromDate}&to=${toDate}`));
             
    }

    const toCapatilized = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className="container mt-5">
    <h2 className="text-center mb-4">Search by Date Range</h2>
    <form id="searchForm" onSubmit={findNews}>
        <div className="row justify-content-center align-items-center">
            {/* Company Select Dropdown in its own row */}
            <div className="col-md-6 col-12 mb-3">
                <label htmlFor="company" className="form-label">Select Company</label>
                <select className="form-control" id="company" name="company" required>
                    <option value="apple" >Apple</option>
                    <option value="microsoft" selected>Microsoft </option>
                    <option value="google">Google</option>
                    <option value="samsung">Samsung</option>
                    <option value="nokia">Nokia</option>
                </select>
            </div>
        </div>

        <div className="row justify-content-center align-items-center">
            {/* From Date Input in its own row */}
            <div className="col-md-6 col-12 mb-3">
                <label htmlFor="from" className="form-label">From Date</label>
                <input type="date" max={todayDate} className="form-control" id="from" name="from" required />
            </div>
        </div>

        <div className="row justify-content-center align-items-center">
            {/* To Date Input in its own row */}
            <div className="col-md-6 col-12 mb-3">
                <label htmlFor="to" className="form-label">To Date</label>
                <input type="date" max={todayDate} className="form-control" id="to" name="to" required />
            </div>
        </div>

        <div className="row justify-content-center align-items-center">
            {/* Search Button in its own row */}
            <div className="col-md-6 col-12 mb-3">
                <button type="submit" className="btn btn-primary w-100">Search</button>
            </div>
        </div>
    </form>

    <div className="mt-3" style={{height:'50px'}}>
        <h5>{loading ? 'Loading articles...' : ''}</h5>
    </div>

    <NewsCard articles={articles} heading={`All articles about ${toCapatilized(companyName)} from ${fromDate} to ${toDate}.`}/>
</div>

    );
}

export default SearchNews;
