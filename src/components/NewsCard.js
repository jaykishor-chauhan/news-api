import React from 'react'

function NewsCard({articles,heading}) {
    let key= 0;
    return (
        <div className='container'>
            <div className='mt-3 mb-4' style={{height: '50px'}}>
                <h3>{articles?heading:''}</h3>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4">
                    {articles ? articles.map((article) => (
                        <div className="col d-flex mb-4" key={key++}>
                            <div className="card d-flex flex-column" style={{ width: '18rem' }}>
                                <img
                                    src={article.urlToImage ? article.urlToImage : "https://evershineoptical.com.sg/wp-content/uploads/varilux-lens.png"}
                                    className="card-img-top"
                                    alt={article.title}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        {article.title !== '[Removed]' ? article.title.slice(0, 60) : 'Aritcle is not avilable'}...
                                    </h5>
                                    <p className="card-text">
                                        {article.description !== '[Removed]' ? (article.description ? article.description.slice(0, 110) : '') : ''}...
                                    </p>
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary mt-auto align-self-start"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>


        </div>
    )
}

export default NewsCard
