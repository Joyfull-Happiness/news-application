
<form onSubmit={handleSubmit} className="form">
<input
  type="text"
  placeholder="Enter a city"
  value={city}
  onChange={handleChange}
  className="input"
/>
<button type="submit" className="button">
  Get Weather
</button>
</form>





export default Form; 