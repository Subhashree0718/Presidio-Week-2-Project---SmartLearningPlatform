const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60*60*1000 } 
}));

app.use('/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 60*60*1000,
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production'
  }
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
