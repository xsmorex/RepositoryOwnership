//invie the function for the emil module has and claim

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let ClaimsHandler = require("./src/ClaimHandler");

app.get('/', function (req, res) {
  res.send(`To submit a claim, send a POST request to /newclaim or to follow up on an existing claim, visit /checkclaim.`)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Creating a claims handler
let claims = new ClaimsHandler();

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/newclaim', function(req, res) {
  let emailAddr = req.body.email;
  let repositoryURL = req.body.repositoryURL;

  res.send(claims.addNewClaim(emailAddr, repositoryURL));
});

app.get('/getclaim', function(req, res) {
  let hash = req.param("hash");
  let claim = claims.getClaim(hash);

  if (claim === null) {
    res.status(404).send({
      status: 404,
      error: "Claim not found."
    });
  } else {
    res.send(claim);
  }
});

app.get('/allclaims', function(req, res) {
  res.send(claims.getAllClaims());
});