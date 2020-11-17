const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const port = 3000;

const indexRouter = require('./routes/index');
const loggerRouter = require('./routes/logger');

const app = express();

app.set('view engine', 'ejs');

require('./config/database');

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: false }));

app.use('/', indexRouter);
app.use('/logs', loggerRouter);

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}...`);
});