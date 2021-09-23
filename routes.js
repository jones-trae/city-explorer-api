

function handleGetAbout(req, res) {
  res.send('Hi from about');
}

function handleGetHome(request, response) {
  console.log('You rang');
  response.status(200).send('Yooooo');
}

module.exports = { handleGetAbout, handleGetHome };

