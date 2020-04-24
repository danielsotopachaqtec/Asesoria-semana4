const express = require('express');
const app = express();
const fetch = require('node-fetch');

const urlPost = 'https://jsonplaceholder.typicode.com/posts';
const urlGet = 'https://jsonplaceholder.typicode.com/posts/1';
const headers = {
	'Content-Type': 'application/json',
};
const data = {
	title: 'foo',
	body: 'bar',
	userId: 1,
};
// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => response.json())
// 	.then((data) => {
// 		console.log('fetch', data);
// 	})
// 	.catch((err) => console.log(err));

const getData = async (url) => {
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log('json data:', json);
	} catch (error) {
		console.log('error:', error);
	}
};
getData(urlGet);

fetch(urlPost, { method: 'POST', headers: headers, body: JSON.stringify(data) })
	.then((res) => {
		console.log('res.status', res.status);
		console.log('res.statusText', res.statusText);
		console.log('res.redirected', res.redirected);
		console.log('res.ok', res.ok);
		console.log('res.url', res.url);
		return res.json();
	})
	.then((data) => {
		console.log('data', data);
	})
	.catch((err) => console.log(err));

app.use(express.static('public'));
app.get('/', function (req, res) {
	// res.send('Hola todos');
	res.render('index');
});

app.set('view engine', 'ejs');

app.listen(3000, function () {
	console.log(
		'Ejemplo express, el servidor se esta ejecutando en el puerto 3000'
	);
});
