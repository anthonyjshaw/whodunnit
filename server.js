// const express = require('express');
// const compression = require('compression');
// const path = require('path');
import express from 'express';
import compression from 'compression';
import path from 'path';
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
