const express = require('express')
const cors = require('cors')
const connectDB = require('./db')

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

const expenseRoutes = require('./routes/expense')
const budgetRoutes = require('./routes/budget')

app.use('/api/expenses', expenseRoutes)
app.use('/api/budgets', budgetRoutes)




const PORT = 5000; 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
