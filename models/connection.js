const mongoose = require('mongoose')

const connectionString = "mongodb+srv://admin:lacapsule@cluster0.xv1qo6y.mongodb.net/pipedrive"

mongoose.connect(connectionString, { connectTimeoutMS: 2000 }).then(() => console.log('Database connected')).catch(error => console.error(error))