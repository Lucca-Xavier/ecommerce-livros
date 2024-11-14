const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

const router = express.Router();

router.get('/:userId', async (req,res) => {
    const { userId } = req.params

    try {
        const user = await User.findByPk(userId)
        if(!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const items = await Cart.findAll({
            where: { userId },
            include: {
                model: Product,
                attributes: ['id', 'name', 'author', 'category', 'price', 'image']
            }
        })
        res.status(200).json(items)
    } catch (error) {
        console.error("Error fetching cart items: ", error)
        res.status(500).json({ message: 'Error fetching cart items' })
    }

})

router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    console.log(`UserId: ${userId}, ProductId: ${productId}, Quantity: ${quantity}`);  

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            console.log(`User not found for id: ${userId}`); 
            return res.status(404).json({ error: 'User not found' });
        }

        const product = await Product.findByPk(productId);
        if (!product) {
            console.log(`Product not found for id: ${productId}`);  
            return res.status(404).json({ error: 'Product not found' });
        }

        const existingItem = await Cart.findOne({ where: { userId, productId } });

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.priceAll = existingItem.quantity * product.price;
            await existingItem.save();
        } else {
            await Cart.create({
                userId,
                productId,
                quantity,
                priceAll: product.price * quantity
            });
        }

        res.status(201).json({ message: "Item added successfully" });
    } catch (error) {
        console.error("Error adding product to cart:", error); 
        res.status(500).json({ message: "Error adding product to cart" });
    }
});

router.delete('/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const item = await Cart.findOne({ where: { userId, productId } });
        if (!item) {
            return res.status(404).json({ error: 'Item não encontrado no carrinho' });
        }

        await item.destroy();
        
        const updatedCart = await Cart.findAll({
            where: { userId },
            include: {
                model: Product,
                attributes: ['id', 'name', 'author', 'category', 'price', 'image']
            }
        });
        
        res.status(200).json({ message: 'Item deletado com sucesso', cart: updatedCart });

    } catch (error) {
        console.error("Erro ao deletar produto do carrinho:", error);
        res.status(500).json({ message: 'Erro ao remover item do carrinho' });
    }
});

router.put('/:userId/:productId', async (req, res) => {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const item = await Cart.findOne({ where: { userId, productId } });
        if (!item) {
            return res.status(404).json({ error: 'Item não encontrado no carrinho' });
        }

        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        // Atualiza a quantidade e o preço total do item no carrinho
        item.quantity = quantity;
        item.priceAll = quantity * product.price;  
        await item.save();

        // Retorna o carrinho atualizado do usuário
        const updatedCart = await Cart.findAll({
            where: { userId },
            include: {
                model: Product,
                attributes: ['id', 'name', 'author', 'category', 'price', 'image']
            }
        });

        res.status(200).json({ message: 'Item atualizado com sucesso', cart: updatedCart });

    } catch (error) {
        console.error("Erro ao atualizar item no carrinho:", error);
        res.status(500).json({ message: 'Erro ao atualizar item no carrinho' });
    }
});


module.exports = router;
