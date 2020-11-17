const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override');
const port = 3000;

const app = express();

const indexRouter = require('./routes/index');
const loggerRouter = require('./routes/logger');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded( { extended: false }));

app.use('/', indexRouter);
app.use('/logger', loggerRouter);

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}...`);
});