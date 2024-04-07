import React, { useState, useEffect } from 'react'

function QuotesPage() {
    const [quotes, setQuotes] = useState(null)

    const getRandomElements = (array, count) => {
        // Shuffle the array
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        // Get the first 'count' elements
        return shuffledArray.slice(0, count);
    }
    useEffect(() => {
        fetch('https://seussology.info/api/quotes')
            .then(response => response.json())
            .then(json => {
                const randomTenQuotes = getRandomElements(json, 10);
                setQuotes(randomTenQuotes)
            })
    }, [])

    return (
        <div>
            <div className='quotes-container'>
                {
                    quotes?.map((quote) => {
                        return <div key={quote.id} className='quote-box'>
                            <p className='title'>{quote.text}</p>
                            <p className='subtitle'> - {quote.book.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default QuotesPage