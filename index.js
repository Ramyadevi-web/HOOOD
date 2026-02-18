const express = require('express');
const connectDB = require('./config/dbConfig.js');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/users', authRoutes);

app.get('/', (req,res) => {
    res.send('HOOOD authentication API is running');
})

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})