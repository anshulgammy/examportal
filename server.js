const express = require('express');
const app = express();
const port = '9999';

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));

// routing
app.get('/', (req, res) => {
	res.send('Chat server is running!');
});

app.get('/exam', (req, res) => {
	res.sendFile( __dirname + '/home.html');
});

// server creation.
var server = app.listen(port, () => {
	console.log("Listening on port: " + port);
});