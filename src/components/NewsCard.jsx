import Form from './components/Form.jsx';

function NewsCard({ newsProp }) {
    //weather is the entire data obj
    console.log('weather', weather);
  
    //explore what weather.weather[0] looks like in the console
    const { main, description, icon } = weather.weather[0];
  
    //explore what weather.main looks like in the console
    const { temp_max, temp_min } = weather.main;
  
    
    // render the card in the return below. Use the same classNames if you want the styling to apply
    return (
      <div className="card">
        <h1>Breaking News!</h1>
        <Form category={category} handleSubmit={handleSubmit} className="form" handleChange={setCategory}/>
       

     
        <p className="description">{description}</p>
      
      </div>
    );
  }
  
  


export default NewsCard; 