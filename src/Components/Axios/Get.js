import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'

const Get = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderList = (title, key) => (
    <div style={{ flex: '1' }}>
      <h1>{title}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item[key]}</li>
        ))}
      </ul>
    </div>
  );
  const [showPost, setShowPost] = useState(false);

  const togglePost = () => {
    setShowPost(!showPost);
  };
  const inputStyle = {
    width: '100PX',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '3px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
};
  return (
    <div>
      <div style={{ display: 'flex', padding: '50px' }}>
        {renderList('Posts', 'title')}
        {renderList('Author', 'author')}
        {renderList('Genre', 'genre')}
        {renderList('Publication Year', 'publication_year')}
      </div>
      <button onClick={togglePost} style={{...inputStyle, backgroundColor: 'black', color: 'white' , top: '10px', right: '10px' , marginLeft:'1300px' , borderRadius:'10px'}}>
        {showPost ? 'Close' : 'Add Books'}
      </button>
      {showPost && <Post />}
    </div>
  );
};

export default Get;
