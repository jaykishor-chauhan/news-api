import React from 'react'

function News({articles}) {
    return (
        <div className='container'>
            <div className='mt-3 mb-4'>
                <h3>ApanNews- Top Headlines</h3>
            </div>
            <div className="container">
  <div className="row row-cols-1 row-cols-md-4">
    {articles.map((article) => (
      <div className="col d-flex mb-4" key={article.url}>
        <div className="card d-flex flex-column" style={{ width: '18rem' }}>
          <img
            src={article.urlToImage}
            className="card-img-top"
            alt={article.title}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{article.title.slice(0, 60)}...</h5>
            <p className="card-text">
              {article.description.slice(0, 110)}...
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
    ))}
  </div>
</div>


        </div>
    )
}

export default News
