const mongoose = require('mongoose')

// 2, connection to Database 27017is the default port of mongoDB
mongoose.connect('mongodb://localhost /playground', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connection successful'))
.catch(() => console.log("Database connection failed"))
