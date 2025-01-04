import React from 'react'

function SearchNews() {
    return (
        <div className='container mt-5'>
            <div className="row mb-4 d-flex justify-content-center">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4 text-center">
                    <form id="searchForm">
                        <div className="input-group" style={{ height: '45px' }}>
                            <input
                                type="text"
                                className="form-control"
                                id="searchInput"
                                placeholder="Search for news..."
                            />
                            <button
                                className="btn btn-primary"
                                style={{ width: '100px' }}
                                type="button"
                            // onClick={() => searchNews()}
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div id="results" className="row">
                <div className="col-md-12">
                    <h5 className="text-center text-muted">No results to display. Use the search bar to find news.</h5>
                </div>
            </div>
        </div>
    )
}

export default SearchNews
