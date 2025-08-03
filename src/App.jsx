import { useState } from 'react';
import NewsCard from './components/NewsCard.jsx';
import Form from './components/Form.jsx';
import './App.css';

function App() {
  // const [city, setCity] = useState('');
  const [newsData, setNewsData] = useState(null);
  const apiKey = '54c87cf8b7362dfe1c3a42e7e009b805';

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error('API error:', err));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  return (
    <div className="app">
      <h1>BREAKING NEWS!</h1>
      <form onSubmit={handleSubmit} className="form">
        
        <button type="submit" className="button">
          Get Weather
        </button>
      </form>

      {newsData && <NewsCard newsProp={newsData} />}
    </div>
  );
}

export default App;
