import { useState } from 'react';
import NewsCard from './components/NewsCard.jsx';
import Form from './components/Form.jsx';
import './App.css';

function App() {
  const [category, setCategory] = useState(null);
  
  const [newsData, setNewsData] = useState(null);
  const apiKey = '54c87cf8b7362dfe1c3a42e7e009b805';

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error('API error:', err));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="app">
      <h1>BREAKING NEWS!</h1>
      {/* value is connected to the handlechange where it sets the cateogry as the value 
      and the onchange submit is connect with the api call, 
       */} {}
      <Form category={category} handleSubmit={handleSubmit} className="form" handleChange={setCategory}/>
        
      
      {/* {newsData && <NewsCard newsProp={newsData} />} */}
      {newsData && <NewsCard newsProp={newsData}/> }

      <div class="suggestion"></div>
 <p>No news found.</p>
 </div>

  );
}

export default App;
