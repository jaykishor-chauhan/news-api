import React, {useState, useEffect} from 'react';

function SearchNews() {
    const [todayDate, setTodayDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setTodayDate(formattedDate);
    }, []);

    const findNews = (e)=>{
        e.preventDefault();
        const fromDate = document.getElementById('from').value;
        const toDate = document.getElementById('to').value;
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Search by Date Range</h2>
            <form id="searchForm" onSubmit={findNews}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        <div className="mb-3">
                            <input type="date" className="form-control" id="from" name="from" required />
                        </div>
                    </div>
                    <div className="col-md-1 text-center">
                        <span className="mt-2">to</span>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-3">
                            <input type="date" max={todayDate} className="form-control" id="to" name="to" required />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button type="submit"  className="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </form>
            <div className="mt-3">
                <h5>Generated Query:</h5>
                <p id="generatedQuery" className="alert alert-info"></p>
            </div>
        </div>
    );
}

export default SearchNews;
