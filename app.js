
// Make an app object..
var App = function(props) {
// main app that will have components...including list.
  var movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]; 

  var getSearchResults = function(input) {
    console.log(input);
  }

  return (
    <div className = "shebang">
    <h1 className = "title">Movie List</h1>
    <SearchBar getSearchResults = {getSearchResults}/>
    <MovieList movies = {movies} />
    </div>
    )
}

var MovieList = function(props) {
  // will be a component inside App.
  console.log(props.movies[0])
  return(
    <div className = "playList">

    {props.movies.map( movie => <MovieCard movie={movie} />)}

    </div>
  )

}

var MovieCard = function(props) {
// display info from each movie.
  return (
    <div className = "card">{props.movie.title}</div>
    )
}

var SearchBar = function(props) {
  return (
  <form>
    <label>
      Search:
      <input type ="text" searchText = "searchText" />
      </label>
      <input 
      type = "submit" 
      value="Submit" 
      getSearchResults()/>
  </form>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
window.App = App;

