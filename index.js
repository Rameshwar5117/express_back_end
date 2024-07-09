const express = require('express');
const Student = require('./router/Student')
const LearnRoute = require('./router/LearnRoute')
const authRouteConcept = require('./router/authRouteConcept')
const app = express();
const port = 3000;

app.use('/', Student)
app.use('/data', LearnRoute)
app.use('/auth', authRouteConcept)

app.listen(port, () => {
    console.log("Server start on the port : ", port)
})