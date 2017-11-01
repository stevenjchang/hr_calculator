const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, '../src/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send() )
app.post('/calc', (req, res) => {
  let operation = req.body.operation;
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let total = null;
  if (operation === "add") {
    total = num1 + num2;
  } else if (operation === "sub") {
    total = num1 - num2;
  } else if (operation === "mult") {
    total = num1 * num2;
  } else if (operation === "div") {
    total = num1 / num2;
  } 
  res.send({"total": total})
})
app.listen(PORT, (err) => {  
  if (err) { return console.log('failure at app.listen in server/index =>', err) }
  console.log(`server is listening on ${PORT}`)
})