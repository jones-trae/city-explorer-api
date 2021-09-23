

function handleGetAbout(req, res) {
  res.send('Hi from about');
}

function handleGetHome(request, response) {
  console.log('You rang');
  response.status(200).send('Yooooo');
}

module.exports = { handleGetAbout, handleGetHome };

//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1
function handleGetMovies(req, res) {
  res.send('Coming soon');
}

module.exports = { handleGetAbout, handleGetHome, handleGetMovies};