const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/deliveries', deliveryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Delivery Service is running on port ${PORT}`);
});
