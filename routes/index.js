var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/reception', function(req, res, next) {
//   res.render({result: req.body});
// });

router.get('/login', function(req, res, next) {
  const code = req.query.code;
  console.log(code)
  if (!code) {
    return res.status(400).send({result: false, error:'No code provided'});
  }

  try {
    fetch('https://oauth.pipedrive.com/oauth/token', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + btoa('11920be993928705:7cd2ef0475d0b0f8ba3d5f7fff48aef7c9f35898')},
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'https://frontend-pipedrive-test.vercel.app',
      })
    }).then(reponse=>reponse.json()).then(data=>{
      console.log(data)
      const { access_token, refresh_token } = data;
      console.log('Pipedrive Access Token:', access_token);  // Debugging
      res.send({result: true, token: access_token});
    })
    
  } catch (error) {
    console.error('Error retrieving Pipedrive access token:', error);
    res.status(500).send({result: false, error:'Error retrieving Pipedrive access token.'});
  }
});


module.exports = router;
