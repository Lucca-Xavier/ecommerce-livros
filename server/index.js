const cors = require('cors');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const produtosRoutes = require('./routes/produtosRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');



const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/products', produtosRoutes)
app.use('/carrinho/', carrinhoRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
