import React from 'react'

const Pagination = ({ pageCount, currentPage, handler }) => {

    const handleFirst = () => {
        handler(1);
    }

    const handleLast = () => {
        handler(pageCount)
    }

    const handlePrev = () => {
        handler(currentPage-1 >= 1 ? currentPage-1 : 1)
    }

    const handleNext = () => {
        handler(currentPage+1 <= pageCount ? currentPage+1 : pageCount)        
    }

    const handleSelectPage = (i) => {
        handler(i)
    }
    
    let pagination = '';
    if (pageCount) {

        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(<li className="pagination__item" key={i}><button className={i == currentPage ? 'pagination__item__button--active' : ''} onClick={() => { handleSelectPage(i)}}>{i}</button></li>)
        }

        pagination = <ul className="pagination">
            <li className="pagination__item"><button onClick={handleFirst}>|&lt;</button></li>
            <li className="pagination__item"><button onClick={handlePrev}>&lt;&lt;</button></li>
            {pages}
            <li className="pagination__item"><button onClick={handleNext}>&gt;&gt;</button></li>
            <li className="pagination__item"><button onClick={handleLast}>&gt;|</button></li>
        </ul>
    }

    return (
        <div className="pagination">
            {pagination}
        </div>
    )
}

export default Pagination