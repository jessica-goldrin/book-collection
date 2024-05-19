import axios from 'axios'
import React, { useState } from 'react';

function Create() {
    const [title, setTitle] = useState()
    const handleAdd =() => {
        axios.post('http://localhost:3001/add', {title: title})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <form className="create_form">
            <input type="text" placeholder="Enter book name" onChange={(e) => setTitle(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add Book</button>
        </form>
    );
}

export default Create
