const mongoose = require('mongoose');

const db = mongoose.connection;

const connectionURI = 'mongodb+srv://admin:admin1234@cluster0.a7b8n.mongodb.net/gamebacklogger?retryWrites=true&w=majority';

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}...`);
});

db.on('error', function(error) {
    console.log(`Encountered the following error: ${error.message}...`);
})