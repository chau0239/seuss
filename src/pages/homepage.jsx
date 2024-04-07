import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Homepage() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        fetch('https://seussology.info/api/books')
            .then(response => response.json())
            .then(json => {
                setBooks(json)
            })
    }, [])

    return (
        <section>
            <div className='grid'>
                {
                    books?.map((book) => {
                        return <Link to={"/product/" + book.id} key={book.id}>
                            <img src={book.image} alt={book.title} className='book-img' />
                        </Link>
                    })
                }
            </div>
        </section>
    )
}

export default Homepage