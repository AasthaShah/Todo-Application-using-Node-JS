const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const taskRoutes = require('./routes/task');
const db = require('./util/database');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(taskRoutes);

app.listen(8080);

