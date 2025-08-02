
<form onSubmit={handleSubmit} className="form">
<form class="mood-form">
      <label for="mood">Choose a Category:</label>
      <select id="mood" name="mood">
        <option value="">--Choose One--</option>
        <option value="general">General</option>
        <option value="world">World</option>
        <option value="nation">Nation</option>
        <option value="business">Buisness</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </select>
<button type="submit" className="button">
  Get News
</button>
</form>





export default Form; 