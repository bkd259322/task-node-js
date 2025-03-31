// const { json } = require('express')
const express = require('express')
const fs = require('fs')
const {readWriteData} = require('./readWriteData')


const itemRoute = require('./route/itemRoute')
const publicRoute = require('./route/publicRoute')



const app = express();
app.use(express.json());

app.use('/api/data', itemRoute);
// app.use('/public',publicRoute)


app.listen(4545)

