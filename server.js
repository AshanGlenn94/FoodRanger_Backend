const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//import routes
const authRoute = require('./routes/auth');

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log('Connected to DB')
);

//Middlewares
app.use(express.json());

//Route middlewares
app.use('/auth', authRoute);

const PORT = 3000 || env.PORT;
app.listen(PORT, () => console.log(`Server is listning on port ${PORT}...`));
