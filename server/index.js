const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware para interpretar JSON
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
