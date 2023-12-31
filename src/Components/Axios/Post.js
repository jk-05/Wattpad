import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publication_year: '',
        genre: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        try {
            await axios.post('http://localhost:3000/books', formData);
            console.log('Book added successfully!');
            setFormData({


                
                title: '',
                author: '',
                publication_year: '',
                genre: ''
            });
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    // Styles for black and white theme
    const blackAndWhiteTheme = {
        color: 'black',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '300px',
        margin: '0 auto',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '5px 0',
        borderRadius: '3px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    };

    return (
        <div style={blackAndWhiteTheme}>
            <center>
                <h2>Add a New Book</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        style={inputStyle}
                    /><br />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={formData.author}
                        onChange={handleChange}
                        style={inputStyle}
                    /><br />
                    <input
                        type="text"
                        name="publication_year"
                        placeholder="Publication Year"
                        value={formData.publication_year}
                        onChange={handleChange}
                        style={inputStyle}
                    /><br />
                    <input
                        type="text"
                        name="genre"
                        placeholder="Genre"
                        value={formData.genre}
                        onChange={handleChange}
                        style={inputStyle}
                    /><br />
                    <button type="submit" style={{...inputStyle, backgroundColor: 'black', color: 'white'}}>Add Book</button>
                </form>
            </center>
        </div>
    );
};

export default AddBook;
