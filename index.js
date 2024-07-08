const express = require('express');
const Student = require('./router/Student')
const app = express();
const port = 3000;

app.use('/', Student)

app.listen(port, () => {
    console.log("Server start on the port : ", port)
})