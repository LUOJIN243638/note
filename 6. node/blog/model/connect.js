
//mongoose.set('useCreateIndex', true) //加上这个
// mongoose.connect(db, { useNewUrlParser: true })

// connect to Database
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true})
	.then(() => console.log('Database connection successful!'))
	.catch(() => console.log('Database connection failed!'))


