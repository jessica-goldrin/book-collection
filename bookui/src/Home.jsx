import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setBooks(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <h2>Book Collection</h2>
            <Create />
            <br />
            {
                books.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    books.map(book => (
                        <div className='title'>
                            <p>{book.title}</p>
                            <div>
                                <button 
                                onClick={() => handleDelete(book._id)}>Remove</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home
