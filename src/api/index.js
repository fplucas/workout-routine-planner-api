const express = require('express');
const app = express();
const config = require('config');

app.listen(config.get('api.port'), () => {
  console.log(`App listening at localhost:${config.get('api.port')}`);
});
