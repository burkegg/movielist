
// Make an app object..
class App extends React.Component {
// main app that will have components...including list.
  constructor(props) {
    super(props),
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      searchTerm: '',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    console.log('in handleSubmit');
    console.log(e);
    this.findTerm(e);
    
  }
  findTerm(term) {
    var regex1 = new RegExp(term, 'i');
    var anyFound = false;
    for (var idx = 0; idx < this.state.movies.length; idx++) {
      // replace === with RegExp contains 
      if ((regex1.test(this.state.movies[idx].title)) && (term !== '')) {
        console.log('we match at ' + this.state.movies[idx].title);
        anyFound = true;
      }
    }
    if (!anyFound) {
      // make a 'none found' card appear.
      console.log('none found, sucka!');
    }
  }


  render() {
    return (
      <div className = "shebang">
      <h1 className = "title">Movie List</h1>
      <Search
        handleSubmit = {this.handleSubmit}
        />
      <MovieList movies = {this.state.movies} />
      </div>
      )
    }
};




var MovieList = function(props) {
  // will be a component inside App.
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



var Search = (props) => {
  return(
    <div className = "search-bar">
      <input 
      className="form" 
      type="text" 
      />
      <button className ="btn hidden-sm-down"
      onClick = {() => { props.handleSubmit(($('.form').val())); }}>
      Search</button>
    </div>
    )
}




// onClick is wrapped in a function so that it doesn't fire immediately.











ReactDOM.render(<App />, document.getElementById('app'));
window.App = App;

