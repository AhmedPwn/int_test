import React from 'react'


export default function Pagination({goPrevPage , goNextPage}) {
    return (
        <div>
            {goPrevPage && <button onClick={goPrevPage} >Previous</button>}
            {goNextPage && <button onClick={goNextPage} >Next</button>}
        </div>
    )
}
