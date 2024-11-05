const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const produtosRoutes = require('./routes/produtosRoutes');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/produtos', produtosRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
